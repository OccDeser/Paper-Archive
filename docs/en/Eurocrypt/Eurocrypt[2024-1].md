# Eurocrypt[2024-1]
## SQIsignHD: New Dimensions in Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)
### Authors
* Pierrick Dartois, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Pierrick Dartois, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, INRIA, IMB, UMR 5251, 33400, Talence, France
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR - UMR 6625, Université de Rennes, Rennes, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> We introduce SQIsignHD, a new post-quantum digital signature scheme inspired by SQIsign. SQIsignHD exploits the recent algorithmic breakthrough underlying the attack on SIDH, which allows to efficiently represent isogenies of arbitrary degrees as components of a higher dimensional isogeny. SQIsignHD overcomes the main drawbacks of SQIsign. First, it scales well to high security levels, since the public parameters for SQIsignHD are easy to generate: the characteristic of the underlying field needs only be of the form \(2^{f}3^{f'}-1\). Second, the signing procedure is simpler and more efficient. Our signing procedure implemented in C runs in 28 ms, which is a significant improvement compared to SQISign. Third, the scheme is easier to analyse, allowing for a much more compelling security reduction. Finally, the signature sizes are even more compact than (the already record-breaking) SQIsign, with compressed signatures as small as 109 bytes for the post-quantum NIST-1 level of security. These advantages may come at the expense of the verification, which now requires the computation of an isogeny in dimension 4, a task whose optimised cost is still uncertain, as it has been the focus of very little attention. Our experimental sagemath implementation of the verification runs in around 600 ms, indicating the potential cryptographic interest of dimension 4 isogenies after optimisations and low level implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_1](https://doi.org/10.1007/978-3-031-58716-0_1)
## Tight Indistinguishability Bounds for the XOR of Independent Random Permutations by Fourier Analysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### Abstract
> The XOR of two independent permutations (XoP) is a well-known construction for achieving security beyond the birthday bound when implementing a pseudorandom function using a block cipher (i.e., a pseudorandom permutation). The idealized construction (where the permutations are uniformly chosen and independent) and its variants have been extensively analyzed over nearly 25 years.
> 
> The best-known asymptotic information-theoretic indistinguishability bound for the XoP construction is \(O(q/2^{1.5n})\), derived by Eberhard in 2017.
> 
> A generalization of the XoP construction outputs the XOR of \(r \ge 2\) independent permutations, and has also received significant attention in both the single-user and multi-user settings. In particular, for \(r = 3\), the best-known bound (obtained by Choi et al. [ASIACRYPT’22]) is about \(q^2/2^{2.5 n}\) in the single-user setting and \(\sqrt{u} q_{\max }^2/2^{2.5 n}\) in the multi-user setting (where u is the number of users and \(q_{\max }\) is the number of queries per user).
> 
> In this paper, we prove an indistinguishability bound of \(q/2^{(r - 0.5)n}\) for the (generalized) XoP construction in the single-user setting, and a bound of \(\sqrt{u} q_{\max }/2^{(r - 0.5)n}\) in the multi-user setting. In particular, for \(r=2\), we obtain the bounds \(q/2^{1.5n}\) and \(\sqrt{u} q_{\max }/2^{1.5n}\) in single-user and multi-user settings, respectively. For \(r=3\) the corresponding bounds are \(q/2^{2.5n}\) and \(\sqrt{u} q_{\max }/2^{2.5n}\). All of these bounds hold assuming \(q < 2^{n}/2\) (or \(q_{\max } < 2^{n}/2\)).
> 
> Compared to previous works, we improve all the best-known bounds for the (generalized) XoP construction in the multi-user setting, and the best-known bounds for the generalized XoP construction for \(r \ge 3\) in the single-user setting (assuming \(q \ge 2^{n/2}\)). For the basic two-permutation XoP construction in the single-user setting, our concrete bound of \(q/2^{1.5n}\) stands in contrast to the asymptotic bound of \(O(q/2^{1.5n})\) by Eberhard.
> 
> Since all of our bounds are matched (up to constant factors) for \(q > 2^{n/2}\) by attacks published by Patarin in 2008 (and their generalizations to the multi-user setting), they are all tight.
> 
> We obtain our results by Fourier analysis of Boolean functions. Most of our technical work involves bounding (sums of) Fourier coefficients of the density function associated with sampling without replacement. While the proof of Eberhard relies on similar bounds, our proof is elementary and significantly simpler.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_2](https://doi.org/10.1007/978-3-031-58716-0_2)
## AprèsSQI: Extra Fast Verification for SQIsign Using Extension-Field Signing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)
### Authors
* Maria Corte-Real Santos, University College London, London, UK
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
### Abstract
> We optimise the verification of the SQIsign signature scheme. By using field extensions in the signing procedure, we are able to significantly increase the amount of available rational 2-power torsion in verification, which achieves a significant speed-up. This, moreover, allows several other speed-ups on the level of curve arithmetic. We show that the synergy between these high-level and low-level improvements gives significant improvements, making verification 2.07 times faster, or up to 3.41 times when using size-speed trade-offs, compared to the state of the art, without majorly degrading the performance of signing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_3](https://doi.org/10.1007/978-3-031-58716-0_3)
## The Exact Multi-user Security of (Tweakable) Key Alternating Ciphers with a Single Permutation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> We prove the tight multi-user (mu) security of the (tweakable) key alternating cipher (KAC) for any round r with a single permutation and r-wise independent subkeys, providing a more realistic provable-security foundation for block ciphers. After Chen and Steinberger proved the single-user (su) tight security bound of r-round KAC in 2014, its extension under more realistic conditions has become a new research challenge. The state-of-the-art includes (i) single permutation by Yu et al., (ii) the mu security by Hoang and Tessaro, and (iii) correlated subkeys by Tessaro and Zhang. However, the previous works considered these conditions independently, and the tight security bound of r-round KACs with all of these conditions is an open research problem. We address it by giving the new mu-bound with an n-bit message space, approximately \(q \cdot \left( \frac{p + r q}{2^n} \right) ^r\), wherein p and q are the number of primitive and construction queries, respectively. The bound ensures the security up to the \(O(2^\frac{rn}{r+1})\) query complexity and is tight, matching the conventional attack bound. Moreover, our result easily extends to the r-round tweakable KAC when its subkeys generated by a tweak function is r-wise independent. The proof is based on the re-sampling method originally proposed for the mu-security analysis of the triple encryption. Its extension to any rounds is the core technique enabling the new bound.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_4](https://doi.org/10.1007/978-3-031-58716-0_4)
## Partial Sums Meet FFT: Improved Attack on 6-Round AES.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)
### Authors
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Shibam Ghosh, Computer Science Department, University of Haifa, Haifa, Israel
* Victor Mollimard, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Avichai Marmor, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Gaëtan Leurent, Inria, Paris, France
### Abstract
> The partial sums cryptanalytic technique was introduced in 2000 by Ferguson et al., who used it to break 6-round AES with time complexity of \(2^{52}\) S-box computations – a record that has not been beaten ever since. In 2014, Todo and Aoki showed that for 6-round AES, partial sums can be replaced by a technique based on the Fast Fourier Transform (FFT), leading to an attack with a comparable complexity.
> 
> In this paper we show that the partial sums technique can be combined with an FFT-based technique, to get the best of the two worlds. Using our combined technique, we obtain an attack on 6-round AES with complexity of about \(2^{46.4}\) additions. We fully implemented the attack experimentally, along with the partial sums attack and the Todo-Aoki attack, and confirmed that our attack improves the best known attack on 6-round AES by a factor of more than 32.
> 
> We expect that our technique can be used to significantly enhance numerous attacks that exploit the partial sums technique. To demonstrate this, we use our technique to improve the best known attack on 7-round Kuznyechik by a factor of more than 80.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_5](https://doi.org/10.1007/978-3-031-58716-0_5)
## New Records in Collision Attacks on SHA-2.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)
### Authors
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> The SHA-2 family including SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224 and SHA512/256 is a U.S. federal standard published by NIST. Especially, there is no doubt that SHA-256 is one of the most important hash functions used in real-world applications. Due to its complex design compared with SHA-1, there is almost no progress in collision attacks on SHA-2 after ASIACRYPT 2015. In this work, we retake this challenge and aim to significantly improve collision attacks on the SHA-2 family. First, we observe from many existing attacks on SHA-2 that the current advanced tool to search for SHA-2 characteristics has reached the bottleneck. Specifically, longer differential characteristics could not be found, and this causes that the collision attack could not reach more steps. To address this issue, we adopt Liu et al.’s MILP-based method and implement it with SAT/SMT for SHA-2, where we also add more techniques to detect contradictions in SHA-2 characteristics. This answers an open problem left in Liu et al.’s paper to apply the technique to SHA-2. With this SAT/SMT-based tool, we search for SHA-2 characteristics by controlling its sparsity in a dedicated way. As a result, we successfully find the first practical semi-free-start (SFS) colliding message pair for 39-step SHA-256, improving the best 38-step SFS collision attack published at EUROCRYPT 2013. In addition, we also report the first practical free-start (FS) collision attack on 40-step SHA-224, while the previously best theoretic 40-step attack has time complexity \(2^{110}\). Moreover, for the first time, we can mount practical and theoretic collision attacks on 28-step and 31-step SHA-512, respectively, which improve the best collision attack only reaching 27 steps of SHA-512 at ASIACRYPT 2015. In a word, with new techniques to find SHA-2 characteristics, we have made some notable progress in the analysis of SHA-2 after the major achievements made at EUROCRYPT 2013 and ASIACRYPT 2015.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_6](https://doi.org/10.1007/978-3-031-58716-0_6)
## Improving Linear Key Recovery Attacks Using Walsh Spectrum Puncturing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)
### Authors
* Antonio Flórez-Gutiérrez, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> In some linear key recovery attacks, the function which determines the value of the linear approximation from the plaintext, ciphertext and key is replaced by a similar map in order to improve the time or memory complexity at the cost of a data complexity increase. We propose a general framework for key recovery map substitution, and introduce Walsh spectrum puncturing, which consists of removing carefully-chosen coefficients from the Walsh spectrum of this map. The capabilities of this technique are illustrated by describing improved attacks on reduced-round Serpent (including the first 12-round attack on the 192-bit key variant), GIFT-128 and Noekeon, as well as the full DES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_7](https://doi.org/10.1007/978-3-031-58716-0_7)
## A Generic Algorithm for Efficient Key Recovery in Differential Attacks - and its Associated Tool.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)
### Authors
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> Differential cryptanalysis is an old and powerful attack against block ciphers. While different techniques have been introduced throughout the years to improve the complexity of this attack, the key recovery phase remains a tedious and error-prone procedure. In this work, we propose a new algorithm and its associated tool that permits, given a distinguisher, to output an efficient key guessing strategy. Our tool can be applied to SPN ciphers whose linear layer consists of a bit-permutation and whose key schedule is linear or almost linear. It can be used not only to help cryptanalysts find the best differential attack on a given cipher but also to assist designers in their security analysis. We applied our tool to four targets: RECTANGLE, PRESENT-80, SPEEDY-7-192 and GIFT-64. We extend the previous best attack on RECTANGLE-128 by one round and the previous best differential attack against PRESENT-80 by 2 rounds. We improve a previous key recovery step in an attack against SPEEDY and present more efficient key recovery strategies for RECTANGLE-80 and GIFT. Our tool outputs the results in only a second for most targets.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_8](https://doi.org/10.1007/978-3-031-58716-0_8)
## Tight Security of TNT and Beyond - Attacks, Proofs and Possibilities for the Cascaded LRW Paradigm.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)
### Authors
* Ashwin Jha, Ruhr-Universtät Bochum, Bochum, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mustafa Khairallah, Seagate Research Group, Singapore, Singapore
* Mustafa Khairallah, Lund University, Lund, Sweden
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
### Abstract
> Liskov, Rivest and Wagner laid the theoretical foundations for tweakable block ciphers (TBC). In a seminal paper, they proposed two (up to) birthday-bound secure design strategies — LRW1 and LRW2 — to convert any block cipher into a TBC. Several of the follow-up works consider cascading of LRW-type TBCs to construct beyond-the-birthday bound (BBB) secure TBCs. Landecker et al. demonstrated that just two-round cascading of LRW2 can already give a BBB security. Bao et al. undertook a similar exercise in context of LRW1 with TNT — a three-round cascading of LRW1 — that has been shown to achieve BBB security as well. In this paper, we present a CCA distinguisher on TNT that achieves a non-negligible advantage with \( O(2^{n/2}) \) queries, directly contradicting the security claims made by the designers. We provide a rigorous and complete advantage calculation coupled with experimental verification that further support our claim. Next, we provide new and simple proofs of birthday-bound CCA security for both TNT and its single-key variant, which confirm the tightness of our attack. Furthering on to a more positive note, we show that adding just one more block cipher call, referred as \({4}\hbox {-}\textsf {LRW1} \), does not just re-establish the BBB security, but also amplifies it up to \( 2^{3n/4} \) queries. As a side-effect of this endeavour, we propose a new abstraction of the cascaded LRW-design philosophy, referred to as the LRW+ paradigm, comprising two block cipher calls sandwiched between a pair of tweakable universal hashes. This helps us to provide a modular proof covering all cascaded LRW constructions with at least 2 rounds, including \( {4}\hbox {-}\textsf {LRW1} \), and its more established relative, the well-known CLRW2, or more aptly, \( {2}\hbox {-}\textsf {LRW2} \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_9](https://doi.org/10.1007/978-3-031-58716-0_9)
## Improved Differential Meet-in-the-Middle Cryptanalysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)
### Authors
* Zahra Ahmadian, Shahid Beheshti University, Tehran, Iran
* Akram Khalesi, Shahid Beheshti University, Tehran, Iran
* Hossein Moghimi, Shahid Beheshti University, Tehran, Iran
* Dounia M’Foukh, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### Abstract
> In this paper, we extend the applicability of differential meet-in-the-middle attacks, proposed at Crypto 2023, to truncated differentials, and in addition, we introduce three new ideas to improve this type of attack: we show how to add longer structures than the original paper, we show how to improve the key recovery steps by introducing some probability in them, and we combine this type of attacks with the state-test technique, that was introduced in the context of impossible differential attacks. Furthermore, we have developed a MILP-based tool to automate the search for a truncated differential-MITM attack with optimized overall complexity, incorporating some of the proposed improvements. Thanks to this, we can build the best known attacks on the cipher CRAFT, reaching 23 rounds against 21 previously; we provide a new attack on 23-round SKINNY-64-192, and we improve the best attacks on SKINNY-128-384.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_10](https://doi.org/10.1007/978-3-031-58716-0_10)
## SQIsignHD: New Dimensions in Cryptography.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#sqisignhd-new-dimensions-in-cryptography)
### Authors
* Pierrick Dartois, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, Univ. Bordeaux, CNRS, INRIA, IMB, UMR 5251, 33400, Talence, France
* Pierrick Dartois, INRIA, IMB, UMR 5251, 33400, Talence, France
* Damien Robert, INRIA, IMB, UMR 5251, 33400, Talence, France
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR - UMR 6625, Université de Rennes, Rennes, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### Abstract
> We introduce SQIsignHD, a new post-quantum digital signature scheme inspired by SQIsign. SQIsignHD exploits the recent algorithmic breakthrough underlying the attack on SIDH, which allows to efficiently represent isogenies of arbitrary degrees as components of a higher dimensional isogeny. SQIsignHD overcomes the main drawbacks of SQIsign. First, it scales well to high security levels, since the public parameters for SQIsignHD are easy to generate: the characteristic of the underlying field needs only be of the form \(2^{f}3^{f'}-1\). Second, the signing procedure is simpler and more efficient. Our signing procedure implemented in C runs in 28 ms, which is a significant improvement compared to SQISign. Third, the scheme is easier to analyse, allowing for a much more compelling security reduction. Finally, the signature sizes are even more compact than (the already record-breaking) SQIsign, with compressed signatures as small as 109 bytes for the post-quantum NIST-1 level of security. These advantages may come at the expense of the verification, which now requires the computation of an isogeny in dimension 4, a task whose optimised cost is still uncertain, as it has been the focus of very little attention. Our experimental sagemath implementation of the verification runs in around 600 ms, indicating the potential cryptographic interest of dimension 4 isogenies after optimisations and low level implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_1](https://doi.org/10.1007/978-3-031-58716-0_1)
## Tight Indistinguishability Bounds for the XOR of Independent Random Permutations by Fourier Analysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-indistinguishability-bounds-for-the-xor-of-independent-random-permutations-by-fourier-analysis)
### Authors
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### Abstract
> The XOR of two independent permutations (XoP) is a well-known construction for achieving security beyond the birthday bound when implementing a pseudorandom function using a block cipher (i.e., a pseudorandom permutation). The idealized construction (where the permutations are uniformly chosen and independent) and its variants have been extensively analyzed over nearly 25 years.
> 
> The best-known asymptotic information-theoretic indistinguishability bound for the XoP construction is \(O(q/2^{1.5n})\), derived by Eberhard in 2017.
> 
> A generalization of the XoP construction outputs the XOR of \(r \ge 2\) independent permutations, and has also received significant attention in both the single-user and multi-user settings. In particular, for \(r = 3\), the best-known bound (obtained by Choi et al. [ASIACRYPT’22]) is about \(q^2/2^{2.5 n}\) in the single-user setting and \(\sqrt{u} q_{\max }^2/2^{2.5 n}\) in the multi-user setting (where u is the number of users and \(q_{\max }\) is the number of queries per user).
> 
> In this paper, we prove an indistinguishability bound of \(q/2^{(r - 0.5)n}\) for the (generalized) XoP construction in the single-user setting, and a bound of \(\sqrt{u} q_{\max }/2^{(r - 0.5)n}\) in the multi-user setting. In particular, for \(r=2\), we obtain the bounds \(q/2^{1.5n}\) and \(\sqrt{u} q_{\max }/2^{1.5n}\) in single-user and multi-user settings, respectively. For \(r=3\) the corresponding bounds are \(q/2^{2.5n}\) and \(\sqrt{u} q_{\max }/2^{2.5n}\). All of these bounds hold assuming \(q < 2^{n}/2\) (or \(q_{\max } < 2^{n}/2\)).
> 
> Compared to previous works, we improve all the best-known bounds for the (generalized) XoP construction in the multi-user setting, and the best-known bounds for the generalized XoP construction for \(r \ge 3\) in the single-user setting (assuming \(q \ge 2^{n/2}\)). For the basic two-permutation XoP construction in the single-user setting, our concrete bound of \(q/2^{1.5n}\) stands in contrast to the asymptotic bound of \(O(q/2^{1.5n})\) by Eberhard.
> 
> Since all of our bounds are matched (up to constant factors) for \(q > 2^{n/2}\) by attacks published by Patarin in 2008 (and their generalizations to the multi-user setting), they are all tight.
> 
> We obtain our results by Fourier analysis of Boolean functions. Most of our technical work involves bounding (sums of) Fourier coefficients of the density function associated with sampling without replacement. While the proof of Eberhard relies on similar bounds, our proof is elementary and significantly simpler.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_2](https://doi.org/10.1007/978-3-031-58716-0_2)
## AprèsSQI: Extra Fast Verification for SQIsign Using Extension-Field Signing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#apr-ssqi-extra-fast-verification-for-sqisign-using-extension-field-signing)
### Authors
* Maria Corte-Real Santos, University College London, London, UK
* Jonathan Komada Eriksen, Norwegian University of Science and Technology, Trondheim, Norway
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
### Abstract
> We optimise the verification of the SQIsign signature scheme. By using field extensions in the signing procedure, we are able to significantly increase the amount of available rational 2-power torsion in verification, which achieves a significant speed-up. This, moreover, allows several other speed-ups on the level of curve arithmetic. We show that the synergy between these high-level and low-level improvements gives significant improvements, making verification 2.07 times faster, or up to 3.41 times when using size-speed trade-offs, compared to the state of the art, without majorly degrading the performance of signing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_3](https://doi.org/10.1007/978-3-031-58716-0_3)
## The Exact Multi-user Security of (Tweakable) Key Alternating Ciphers with a Single Permutation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#the-exact-multi-user-security-of-tweakable-key-alternating-ciphers-with-a-single-permutation)
### Authors
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### Abstract
> We prove the tight multi-user (mu) security of the (tweakable) key alternating cipher (KAC) for any round r with a single permutation and r-wise independent subkeys, providing a more realistic provable-security foundation for block ciphers. After Chen and Steinberger proved the single-user (su) tight security bound of r-round KAC in 2014, its extension under more realistic conditions has become a new research challenge. The state-of-the-art includes (i) single permutation by Yu et al., (ii) the mu security by Hoang and Tessaro, and (iii) correlated subkeys by Tessaro and Zhang. However, the previous works considered these conditions independently, and the tight security bound of r-round KACs with all of these conditions is an open research problem. We address it by giving the new mu-bound with an n-bit message space, approximately \(q \cdot \left( \frac{p + r q}{2^n} \right) ^r\), wherein p and q are the number of primitive and construction queries, respectively. The bound ensures the security up to the \(O(2^\frac{rn}{r+1})\) query complexity and is tight, matching the conventional attack bound. Moreover, our result easily extends to the r-round tweakable KAC when its subkeys generated by a tweak function is r-wise independent. The proof is based on the re-sampling method originally proposed for the mu-security analysis of the triple encryption. Its extension to any rounds is the core technique enabling the new bound.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_4](https://doi.org/10.1007/978-3-031-58716-0_4)
## Partial Sums Meet FFT: Improved Attack on 6-Round AES.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#partial-sums-meet-fft-improved-attack-on-6-round-aes)
### Authors
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Shibam Ghosh, Computer Science Department, University of Haifa, Haifa, Israel
* Victor Mollimard, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Avichai Marmor, Department of Mathematics, Bar Ilan University, Ramat Gan, Israel
* Gaëtan Leurent, Inria, Paris, France
### Abstract
> The partial sums cryptanalytic technique was introduced in 2000 by Ferguson et al., who used it to break 6-round AES with time complexity of \(2^{52}\) S-box computations – a record that has not been beaten ever since. In 2014, Todo and Aoki showed that for 6-round AES, partial sums can be replaced by a technique based on the Fast Fourier Transform (FFT), leading to an attack with a comparable complexity.
> 
> In this paper we show that the partial sums technique can be combined with an FFT-based technique, to get the best of the two worlds. Using our combined technique, we obtain an attack on 6-round AES with complexity of about \(2^{46.4}\) additions. We fully implemented the attack experimentally, along with the partial sums attack and the Todo-Aoki attack, and confirmed that our attack improves the best known attack on 6-round AES by a factor of more than 32.
> 
> We expect that our technique can be used to significantly enhance numerous attacks that exploit the partial sums technique. To demonstrate this, we use our technique to improve the best known attack on 7-round Kuznyechik by a factor of more than 80.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_5](https://doi.org/10.1007/978-3-031-58716-0_5)
## New Records in Collision Attacks on SHA-2.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#new-records-in-collision-attacks-on-sha-2)
### Authors
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> The SHA-2 family including SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224 and SHA512/256 is a U.S. federal standard published by NIST. Especially, there is no doubt that SHA-256 is one of the most important hash functions used in real-world applications. Due to its complex design compared with SHA-1, there is almost no progress in collision attacks on SHA-2 after ASIACRYPT 2015. In this work, we retake this challenge and aim to significantly improve collision attacks on the SHA-2 family. First, we observe from many existing attacks on SHA-2 that the current advanced tool to search for SHA-2 characteristics has reached the bottleneck. Specifically, longer differential characteristics could not be found, and this causes that the collision attack could not reach more steps. To address this issue, we adopt Liu et al.’s MILP-based method and implement it with SAT/SMT for SHA-2, where we also add more techniques to detect contradictions in SHA-2 characteristics. This answers an open problem left in Liu et al.’s paper to apply the technique to SHA-2. With this SAT/SMT-based tool, we search for SHA-2 characteristics by controlling its sparsity in a dedicated way. As a result, we successfully find the first practical semi-free-start (SFS) colliding message pair for 39-step SHA-256, improving the best 38-step SFS collision attack published at EUROCRYPT 2013. In addition, we also report the first practical free-start (FS) collision attack on 40-step SHA-224, while the previously best theoretic 40-step attack has time complexity \(2^{110}\). Moreover, for the first time, we can mount practical and theoretic collision attacks on 28-step and 31-step SHA-512, respectively, which improve the best collision attack only reaching 27 steps of SHA-512 at ASIACRYPT 2015. In a word, with new techniques to find SHA-2 characteristics, we have made some notable progress in the analysis of SHA-2 after the major achievements made at EUROCRYPT 2013 and ASIACRYPT 2015.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_6](https://doi.org/10.1007/978-3-031-58716-0_6)
## Improving Linear Key Recovery Attacks Using Walsh Spectrum Puncturing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improving-linear-key-recovery-attacks-using-walsh-spectrum-puncturing)
### Authors
* Antonio Flórez-Gutiérrez, NTT Social Informatics Laboratories, Tokyo, Japan
* Yosuke Todo, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> In some linear key recovery attacks, the function which determines the value of the linear approximation from the plaintext, ciphertext and key is replaced by a similar map in order to improve the time or memory complexity at the cost of a data complexity increase. We propose a general framework for key recovery map substitution, and introduce Walsh spectrum puncturing, which consists of removing carefully-chosen coefficients from the Walsh spectrum of this map. The capabilities of this technique are illustrated by describing improved attacks on reduced-round Serpent (including the first 12-round attack on the 192-bit key variant), GIFT-128 and Noekeon, as well as the full DES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_7](https://doi.org/10.1007/978-3-031-58716-0_7)
## A Generic Algorithm for Efficient Key Recovery in Differential Attacks - and its Associated Tool.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#a-generic-algorithm-for-efficient-key-recovery-in-differential-attacks-and-its-associated-tool)
### Authors
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> Differential cryptanalysis is an old and powerful attack against block ciphers. While different techniques have been introduced throughout the years to improve the complexity of this attack, the key recovery phase remains a tedious and error-prone procedure. In this work, we propose a new algorithm and its associated tool that permits, given a distinguisher, to output an efficient key guessing strategy. Our tool can be applied to SPN ciphers whose linear layer consists of a bit-permutation and whose key schedule is linear or almost linear. It can be used not only to help cryptanalysts find the best differential attack on a given cipher but also to assist designers in their security analysis. We applied our tool to four targets: RECTANGLE, PRESENT-80, SPEEDY-7-192 and GIFT-64. We extend the previous best attack on RECTANGLE-128 by one round and the previous best differential attack against PRESENT-80 by 2 rounds. We improve a previous key recovery step in an attack against SPEEDY and present more efficient key recovery strategies for RECTANGLE-80 and GIFT. Our tool outputs the results in only a second for most targets.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_8](https://doi.org/10.1007/978-3-031-58716-0_8)
## Tight Security of TNT and Beyond - Attacks, Proofs and Possibilities for the Cascaded LRW Paradigm.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#tight-security-of-tnt-and-beyond-attacks-proofs-and-possibilities-for-the-cascaded-lrw-paradigm)
### Authors
* Ashwin Jha, Ruhr-Universtät Bochum, Bochum, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Mustafa Khairallah, Seagate Research Group, Singapore, Singapore
* Mustafa Khairallah, Lund University, Lund, Sweden
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
### Abstract
> Liskov, Rivest and Wagner laid the theoretical foundations for tweakable block ciphers (TBC). In a seminal paper, they proposed two (up to) birthday-bound secure design strategies — LRW1 and LRW2 — to convert any block cipher into a TBC. Several of the follow-up works consider cascading of LRW-type TBCs to construct beyond-the-birthday bound (BBB) secure TBCs. Landecker et al. demonstrated that just two-round cascading of LRW2 can already give a BBB security. Bao et al. undertook a similar exercise in context of LRW1 with TNT — a three-round cascading of LRW1 — that has been shown to achieve BBB security as well. In this paper, we present a CCA distinguisher on TNT that achieves a non-negligible advantage with \( O(2^{n/2}) \) queries, directly contradicting the security claims made by the designers. We provide a rigorous and complete advantage calculation coupled with experimental verification that further support our claim. Next, we provide new and simple proofs of birthday-bound CCA security for both TNT and its single-key variant, which confirm the tightness of our attack. Furthering on to a more positive note, we show that adding just one more block cipher call, referred as \({4}\hbox {-}\textsf {LRW1} \), does not just re-establish the BBB security, but also amplifies it up to \( 2^{3n/4} \) queries. As a side-effect of this endeavour, we propose a new abstraction of the cascaded LRW-design philosophy, referred to as the LRW+ paradigm, comprising two block cipher calls sandwiched between a pair of tweakable universal hashes. This helps us to provide a modular proof covering all cascaded LRW constructions with at least 2 rounds, including \( {4}\hbox {-}\textsf {LRW1} \), and its more established relative, the well-known CLRW2, or more aptly, \( {2}\hbox {-}\textsf {LRW2} \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_9](https://doi.org/10.1007/978-3-031-58716-0_9)
## Improved Differential Meet-in-the-Middle Cryptanalysis.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#improved-differential-meet-in-the-middle-cryptanalysis)
### Authors
* Zahra Ahmadian, Shahid Beheshti University, Tehran, Iran
* Akram Khalesi, Shahid Beheshti University, Tehran, Iran
* Hossein Moghimi, Shahid Beheshti University, Tehran, Iran
* Dounia M’Foukh, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### Abstract
> In this paper, we extend the applicability of differential meet-in-the-middle attacks, proposed at Crypto 2023, to truncated differentials, and in addition, we introduce three new ideas to improve this type of attack: we show how to add longer structures than the original paper, we show how to improve the key recovery steps by introducing some probability in them, and we combine this type of attacks with the state-test technique, that was introduced in the context of impossible differential attacks. Furthermore, we have developed a MILP-based tool to automate the search for a truncated differential-MITM attack with optimized overall complexity, incorporating some of the proposed improvements. Thanks to this, we can build the best known attacks on the cipher CRAFT, reaching 23 rounds against 21 previously; we provide a new attack on 23-round SKINNY-64-192, and we improve the best attacks on SKINNY-128-384.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_10](https://doi.org/10.1007/978-3-031-58716-0_10)
## Post-quantum Security of Tweakable Even-Mansour, and Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#post-quantum-security-of-tweakable-even-mansour-and-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#post-quantum-security-of-tweakable-even-mansour-and-applications)
### Authors
* Gorjan Alagic, University of Maryland, College Park, USA
* Chen Bai, University of Maryland, College Park, USA
* Gorjan Alagic, NIST, Gaithersburg, USA
* Jonathan Katz, Google, Washington DC, USA
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
* Patrick Struck, University of Konstanz, Konstanz, Germany
### Abstract
> The tweakable Even-Mansour construction yields a tweakable block cipher from a public random permutation. We prove post-quantum security of tweakable Even-Mansour when attackers have quantum access to the random permutation but only classical access to the secretly-keyed construction, the relevant setting for most real-world applications. We then use our results to prove post-quantum security—in the same model—of the symmetric-key schemes Chaskey (an ISO-standardized MAC), Elephant (an AEAD finalist of NIST’s lightweight cryptography standardization effort), and a variant of Minalpher (an AEAD second-round candidate of the CAESAR competition).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_11](https://doi.org/10.1007/978-3-031-58716-0_11)
## Probabilistic Extensions: A One-Step Framework for Finding Rectangle Attacks and Beyond.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#probabilistic-extensions-a-one-step-framework-for-finding-rectangle-attacks-and-beyond)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#probabilistic-extensions-a-one-step-framework-for-finding-rectangle-attacks-and-beyond)
### Authors
* Qianqian Yang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
* Yincen Chen, College of Cyber Security, Jinan University, Guangzhou, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, China
* Ling Song, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Yincen Chen, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, Guangdong Key Laboratory of Data Security and Privacy Preserving, Jinan University, Guangzhou, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> In differential-like attacks, the process typically involves extending a distinguisher forward and backward with probability 1 for some rounds and recovering the key involved in the extended part. Particularly in rectangle attacks, a holistic key recovery strategy can be employed to yield the most efficient attacks tailored to a given distinguisher. In this paper, we treat the distinguisher and the extended part as an integrated entity and give a one-step framework for finding rectangle attacks with the purpose of reducing the overall complexity or attacking more rounds. In this framework, we propose to allow probabilistic differential propagations in the extended part and incorporate the holistic recovery strategy. Additionally, we introduce the “split-and-bunch technique” to further reduce the time complexity. Beyond rectangle attacks, we extend these foundational concepts to encompass differential attacks as well. To demonstrate the efficiency of our framework, we apply it to Deoxys-BC-384, SKINNY, ForkSkinny, and CRAFT, achieving a series of refined and improved rectangle attacks and differential attacks. Notably, we obtain the first 15-round attack on Deoxys-BC-384, narrowing its security margin to only one round. Furthermore, our differential attack on CRAFT extends to 23 rounds, covering two more rounds than the previous best attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_12](https://doi.org/10.1007/978-3-031-58716-0_12)
## Massive Superpoly Recovery with a Meet-in-the-Middle Framework - Improved Cube Attacks on Trivium and Kreyvium.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#massive-superpoly-recovery-with-a-meet-in-the-middle-framework-improved-cube-attacks-on-trivium-and-kreyvium)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#massive-superpoly-recovery-with-a-meet-in-the-middle-framework-improved-cube-attacks-on-trivium-and-kreyvium)
### Authors
* Jiahui He, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Hao Lei, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Jiahui He, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Hao Lei, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> The cube attack extracts the information of secret key bits by recovering the coefficient called superpoly in the output bit with respect to a subset of plaintexts/IV, which is called a cube. While the division property provides an efficient way to detect the structure of the superpoly, superpoly recovery could still be prohibitively costly if the number of rounds is sufficiently high. In particular, Core Monomial Prediction (CMP) was proposed at ASIACRYPT 2022 as a scaled-down version of Monomial Prediction (MP), which sacrifices accuracy for efficiency but ultimately gets stuck at 848 rounds of Trivium.
> 
> In this paper, we provide new insights into CMP by elucidating the algebraic meaning to the core monomial trails. We prove that it is sufficient to recover the superpoly by extracting all the core monomial trails, an approach based solely on CMP, thus demonstrating that CMP can achieve perfect accuracy as MP does. We further reveal that CMP is still MP in essence, but with variable substitutions on the target function. Inspired by the divide-and-conquer strategy that has been widely used in previous literature, we design a meet-in-the-middle (MITM) framework, in which the CMP-based approach can be embedded to achieve a speedup.
> 
> To illustrate the power of these new techniques, we apply the MITM framework to Trivium, Grain-128AEAD and Kreyvium. As a result, not only can the previous computational cost of superpoly recovery be reduced (e.g., 5x faster for superpoly recovery on 192-round Grain-128AEAD), but we also succeed in recovering superpolies for up to 851 rounds of Trivium and up to 899 rounds of Kreyvium. This surpasses the previous best results by respectively 3 and 4 rounds. Using the memory-efficient Möbius transform proposed at EUROCRYPT 2021, we can perform key recovery attacks on target ciphers, even though the superpoly may contain over \(2^{40}\) monomials. This leads to the best cube attacks on the target ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_13](https://doi.org/10.1007/978-3-031-58716-0_13)
## Diving Deep into the Preimage Security of AES-Like Hashing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#diving-deep-into-the-preimage-security-of-aes-like-hashing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#diving-deep-into-the-preimage-security-of-aes-like-hashing)
### Authors
* Danping Shi, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Tianyu Zhang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Shiyao Chen, Strategic Centre for Research in Privacy-Preserving Technologies and Systems, Nanyang Technological University, Singapore, Singapore
* Shiyao Chen, Digital Trust Centre, Nanyang Technological University, Singapore, Singapore
* Eik List, Weimar, Germany
### Abstract
> Since the seminal works by Sasaki and Aoki, Meet-in-the-Middle (MITM) attacks are recognized as an effective technique for preimage and collision attacks on hash functions. At Eurocrypt 2021, Bao et al. automated MITM attacks on AES-like hashing and improved upon the best manual result. The attack framework has been furnished by subsequent works, yet far from complete. This paper introduces three key contributions dedicated to further generalizing the idea of MITM and refining the automatic model on AES-like hashing. (1) We introduce S-box linearization to MITM pseudo-preimage attacks on AES-like hashing. The technique works well with superposition states to preserve information after S-boxes at affordable cost. (2) We propose distributed initial structures, an extension on the original concept of initial states, that selects initial degrees of freedom in a more versatile manner to enlarge the search space. (3) We exploit the structural similarities between encryption and key schedule in constructions (e.g., Whirlpool and Streebog) to model propagations more accurately and avoid repeated costs. Weaponed with these innovative techniques, we further empower the MITM framework and improve the attack results on AES-like designs for preimage and collision. We obtain the first preimage attacks on 10-round AES-192, 10-round Rijndael-192/256, and 7.75-round Whirlpool, reduced time and/or memory complexities for preimage attacks on 5-, 6-round Whirlpool and 7.5-, 8.5-round Streebog, as well as improved collision attacks on 6- and 6.5-round Whirlpool.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_14](https://doi.org/10.1007/978-3-031-58716-0_14)
## Twinkle: Threshold Signatures from DDH with Full Adaptive Security.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#twinkle-threshold-signatures-from-ddh-with-full-adaptive-security)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#twinkle-threshold-signatures-from-ddh-with-full-adaptive-security)
### Authors
* Renas Bacho, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Renas Bacho, Saarland University, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### Abstract
> Sparkle is the first threshold signature scheme in the pairing-free discrete logarithm setting (Crites, Komlo, Maller, Crypto 2023) to be proven secure under adaptive corruptions. However, without using the algebraic group model, Sparkle’s proof imposes an undesirable restriction on the adversary. Namely, for a signing threshold \(t<n\), the adversary is restricted to corrupt at most t/2 parties. In addition, Sparkle’s proof relies on a strong one-more assumption.
> 
> In this work, we propose Twinkle, a new threshold signature scheme in the pairing-free setting which overcomes these limitations. Twinkle is the first pairing-free scheme to have a security proof under up to t adaptive corruptions without relying on the algebraic group model. It is also the first such scheme with a security proof under adaptive corruptions from a well-studied non-interactive assumption, namely, the Decisional Diffie-Hellman (DDH) assumption.
> 
> We achieve our result in two steps. First, we design a generic scheme based on a linear function that satisfies several abstract properties and prove its adaptive security under a suitable one-more assumption related to this function. In the context of this proof, we also identify a gap in the security proof of Sparkle and develop new techniques to overcome this issue. Second, we give a suitable instantiation of the function for which the corresponding one-more assumption follows from DDH.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_15](https://doi.org/10.1007/978-3-031-58716-0_15)
## Toothpicks: More Efficient Fork-Free Two-Round Multi-signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-1].md#toothpicks-more-efficient-fork-free-two-round-multi-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-1].md#toothpicks-more-efficient-fork-free-two-round-multi-signatures)
### Authors
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarland University, Saarbrücken, Germany
### Abstract
> Tightly secure cryptographic schemes can be implemented with standardized parameters, while still having a sufficiently high security level backed up by their analysis. In a recent work, Pan and Wagner (Eurocrypt 2023) presented the first tightly secure two-round multi-signature scheme without pairings, called Chopsticks. While this is an interesting first theoretical step, Chopsticks is much less efficient than its non-tight counterparts.
> 
> In this work, we close this gap by proposing a new tightly secure two-round multi-signature scheme that is as efficient as non-tight schemes. Our scheme is based on the \(\textsf{DDH}\) assumption without pairings. Compared to Chopsticks, we reduce the signature size by more than a factor of 3 and the communication complexity by more than a factor of 2.
> 
> Technically, we achieve this as follows: (1) We develop a new pseudorandom path technique, as opposed to the pseudorandom matching technique in Chopsticks. (2) We construct a more efficient commitment scheme with suitable properties, which is an important primitive in both our scheme and Chopsticks. Surprisingly, we observe that the commitment scheme does not have to be binding, enabling our efficient construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58716-0_16](https://doi.org/10.1007/978-3-031-58716-0_16)
