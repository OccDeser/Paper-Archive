# Crypto[2024-4]
## Generic MitM Attack Frameworks on Sponge Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)
### Authors
* Xiaoyang Dong, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, People’s Republic of China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Boxin Zhao, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Shun Zhang, PLA Strategic Support Force Information Engineering University, Zhengzhou, People’s Republic of China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, People’s Republic of China
### Abstract
> This paper proposes general meet-in-the-middle (MitM) attack frameworks for preimage and collision attacks on hash functions based on (generalized) sponge construction. As the first contribution, our MitM preimage attack framework covers a wide range of sponge-based hash functions, especially those with lower claimed security level for preimage compared to their output size. Those hash functions have been very widely standardized (e.g., Ascon-Hash, PHOTON, etc.), but are rarely studied against preimage attacks. Even the recent MitM attack framework on sponge construction by Qin et al. (EUROCRYPT 2023) cannot attack those hash functions. As the second contribution, our MitM collision attack framework shows a different tool for the collision cryptanalysis on sponge construction, while previous collision attacks on sponge construction are mainly based on differential attacks. Most of the results in this paper are the first third-party cryptanalysis results. If cryptanalysis previously existed, our new results significantly improve the previous results, such as improving the previous 2-round collision attack on Ascon-Hash to the current 4 rounds, improving the previous 3.5-round quantum preimage attack on \(\text {SPHINCS}^+\)-Haraka to our 4-round classical preimage attack, etc.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_1](https://doi.org/10.1007/978-3-031-68385-5_1)
## Revisiting Differential-Linear Attacks via a Boomerang Perspective with Application to AES, Ascon, CLEFIA, SKINNY, PRESENT, KNOT, TWINE, WARP, LBlock, Simeck, and SERPENT.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)
### Authors
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> In 1994, Langford and Hellman introduced differential-linear (DL) cryptanalysis, with the idea of decomposing the block cipher E into two parts, \(E_{u}\) and \(E_{\ell }\), such that \(E_{u}\) exhibits a high-probability differential trail, while \(E_{\ell }\) has a high-correlation linear trail. Combining these trails forms a distinguisher for E, assuming independence between \(E_{u}\) and \(E_{\ell }\). The dependency between the two parts of DL distinguishers remained unaddressed until EUROCRYPT 2019, where Bar-On et al. [3] introduced the DLCT framework, resolving the issue up to one S-box layer. However, extending the DLCT framework to formalize the dependency between the two parts for multiple rounds remained an open problem. In this paper, we first tackle this problem from the perspective of boomerang analysis. By examining the relationships between DLCT, DDT, and LAT, we introduce a set of new tables facilitating the formulation of dependencies between the two parts of the DL distinguisher across multiple rounds. Then, we introduce a highly versatile and easy-to-use automatic tool for exploring DL distinguishers, inspired by automatic tools for boomerang distinguishers. This tool considers the dependency between differential and linear trails across multiple rounds. We apply our tool to various symmetric-key primitives, and in all applications, we either present the first DL distinguishers or enhance the best-known ones. We achieve successful results against Ascon, AES, SERPENT, PRESENT, SKINNY, TWINE, CLEFIA, WARP, LBlock, Simeck, and KNOT. Furthermore, we demonstrate that, in some cases, DL distinguishers outperform boomerang distinguishers significantly.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_2](https://doi.org/10.1007/978-3-031-68385-5_2)
## Speeding Up Preimage and Key-Recovery Attacks with Highly Biased Differential-Linear Approximations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)
### Authors
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> We present a framework for speeding up the search for preimages of candidate one-way functions based on highly biased differential-linear distinguishers. It is naturally applicable to preimage attacks on hash functions. Further, a variant of this framework applied to keyed functions leads to accelerated key-recovery attacks. Interestingly, our technique is able to exploit related-key differential-linear distinguishers in the single-key model without querying the target encryption oracle with unknown but related keys. This is in essence similar to how we speed up the key search based on the well known complementation property of DES, which calls for caution from the designers in building primitives meant to be secure in the single-key setting without a thorough cryptanalysis in the related-key model. We apply the method to sponge-based hash function Ascon-HASH, XOFs XOEsch/Ascon-XOF and AEAD Schwaemm, etc. Accelerated preimage or key-recovery attacks are obtained. Note that all the differential-linear distinguishers employed in this work are highly biased and thus can be experimentally verified.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_3](https://doi.org/10.1007/978-3-031-68385-5_3)
## Improving Generic Attacks Using Exceptional Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)
### Authors
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Gaëtan Leurent, Inria, Paris, France
* André Schrottenloher, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> Over the past ten years, there have been many attacks on symmetric constructions using the statistical properties of random functions. Initially, these attacks targeted iterated hash constructions and their combiners, developing a wide array of methods based on internal collisions and on the average behavior of iterated random functions. More recently, Gilbert et al. (EUROCRYPT 2023) introduced a forgery attack on so-called duplex-based Authenticated Encryption modes which was based on exceptional random functions, i.e., functions whose graph admits a large component with an exceptionally small cycle.
> 
> In this paper, we expand the use of such functions in generic cryptanalysis with several new attacks. First, we improve the attack of Gilbert et al. from \(\mathcal {O}(2^{3c/4})\) to \(\mathcal {O}(2^{2c/3})\), where c is the capacity. This new attack uses a nested pair of functions with exceptional behavior, where the second function is defined over the cycle of the first one. Next, we introduce several new generic attacks against hash combiners, notably using small cycles to improve the complexities of the best existing attacks on the XOR combiner, Zipper Hash and Hash-Twice.
> 
> Last but not least, we propose the first quantum second preimage attack against Hash-Twice, reaching a quantum complexity \(\mathcal {O}(2^{3n/7})\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_4](https://doi.org/10.1007/978-3-031-68385-5_4)
## The Algebraic FreeLunch: Efficient Gröbner Basis Attacks Against Arithmetization-Oriented Primitives.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)
### Authors
* Augustin Bariant, ANSSI, Paris, France
* Augustin Bariant, Inria, Paris, France
* Aurélien Boeuf, Inria, Paris, France
* Axel Lemoine, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Axel Lemoine, DGA, Paris, France
### Abstract
> In this paper, we present a new type of algebraic attack that applies to many recent arithmetization-oriented families of permutations, such as those used in Griffin, Anemoi, ArionHash, and XHash8, whose security relies on the hardness of the constrained-input constrained-output (CICO) problem. We refer to the attack as the FreeLunch approach: the monomial ordering is chosen so that the natural polynomial system encoding the CICO problem already is a Gröbner basis. In addition, we present a new dedicated resolution algorithm for FreeLunch systems of complexity lower than current state-of-the-art resolution algorithms.
> 
> We show that the FreeLunch approach challenges the security of full-round instances of Anemoi, Arion and Griffin, and we experimentally confirm these theoretical results. In particular, combining the FreeLunch attack with a new technique to bypass 3 rounds of Griffin, we recover a CICO solution for 7 out of 10 rounds of Griffin in less than four hours on one core of AMD EPYC 7352 (2.3 GHz).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_5](https://doi.org/10.1007/978-3-031-68385-5_5)
## New Approaches for Estimating the Bias of Differential-Linear Distinguishers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)
### Authors
* Ting Peng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Wentao Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Jingsui Weng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Tianyou Ding, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Ting Peng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wentao Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jingsui Weng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Tianyou Ding, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Differential-linear cryptanalysis was introduced by Langford and Hellman in 1994 and has been extensively studied since then. In 2019, Bar-On et al. presented the Differential-Linear Connectivity Table (DLCT), which connects the differential part and the linear part, thus an attacked cipher is divided to 3 subciphers: the differential part, the DLCT part, and the linear part.
> 
> In this paper, we firstly present an accurate mathematical formula which establishes a relation between differential-linear and truncated differential cryptanalysis. Using the formula, the bias estimate of a differential-linear distinguisher can be converted to the probability calculations of a series of truncated differentials. Then, we propose a novel and natural concept, the TDT, which can be used to accelerate the calculation of the probabilities of truncated differentials. Based on the formula and the TDT, we propose two novel approaches for estimating the bias of a differential-linear distinguisher. We demonstrate the accuracy and efficiency of our new approaches by applying them to 5 symmetric-key primitives: Ascon, Serpent, KNOT, AES, and CLEFIA. For Ascon and Serpent, we update the best known differential-linear distinguishers. For KNOT, AES, and CLEFIA, for the first time we give the theoretical differential-linear biases for different rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_6](https://doi.org/10.1007/978-3-031-68385-5_6)
## Time-Memory Trade-Offs Sound the Death Knell for GPRS and GSM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)
### Authors
* Gildas Avoine, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Tristan Claverie, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Xavier Carpent, University of Nottingham, Nottingham, UK
* Tristan Claverie, ANSSI, Paris, France
* Christophe Devine, ANSSI, Paris, France
* Diane Leblanc-Albarel, KU Leuven, Leuven, Belgium
### Abstract
> This paper introduces a practical TMTO-based attack against GSM (A5/3) and GPRS (GEA-3), which are both technologies used in 2G mobile networks. Although designed in the 80 s, these networks are still quite active today, especially for embedded systems. While active attacks against 2G networks with a fake base station were already known for a while, the attacks introduced in this paper rely on a passive attacker. We explain in this paper how to find material in GPRS and GSM communications to perform a TMTO attack. We performed validation experiments with off-the-shelf devices operated in real-life networks. We provide the success probability of the attack and its performances for several real-life scenarios. We optimized the implementation of KASUMI with AVX2 instructions, and designed a specific TMTO implementation to get around the SSD access latency. As a motivating example, an attacker passively eavesdropping a GSM communication between a target and a base station can decrypt any 2-h call with probability 0.43, in 14 min.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_7](https://doi.org/10.1007/978-3-031-68385-5_7)
## Probabilistic Linearization: Internal Differential Collisions in up to 6 Rounds of SHA-3.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)
### Authors
* Zhongyi Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### Abstract
> The \(\texttt {SHA}\text {-} \texttt {3}\) standard consists of four cryptographic hash functions, called SHA3-224, SHA3-256, SHA3-384 and SHA3-512, and two extendable-output functions (XOFs), called SHAKE128 and \(\texttt {SHAKE256}\). In this paper, we study the collision resistance of the \(\texttt {SHA}\text {-} \texttt {3}\) instances. By analyzing the nonlinear layer, we introduce the concept of maximum difference density subspace, and develop a new target internal difference algorithm by probabilistic linearization. We also exploit new strategies for optimizing the internal differential characteristic. Furthermore, we figure out the expected size of collision subsets in internal differentials, by analyzing the collision probability of the digests rather than the intermediate states input to the last nonlinear layer. These techniques enhance the analysis of internal differentials, leading to the best collision attacks on four round-reduced variants of the \(\texttt {SHA}\text {-} \texttt {3}\) instances. In particular, the number of attacked rounds is extended to 5 from 4 for SHA3-384, and to 6 from 5 for \(\texttt {SHAKE256}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_8](https://doi.org/10.1007/978-3-031-68385-5_8)
## Feistel-Like Structures Revisited: Classification and Cryptanalysis.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)
### Authors
* Bing Sun, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zejun Xiang, School of Cyber Science and Technology, Hubei University, Wuhan, 430062, Hubei, People’s Republic of China
* Bing Sun, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zhengyi Dai, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Shaojing Fu, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Xuan Shen, College of Information and Communication, National University of Defense Technology, Wuhan, 430010, Hubei, People’s Republic of China
### Abstract
> In 2023, Liu et al. summarized the Feistel-like structures which use a single round function, and proposed a unified form of these structures which is named the unified structure. This paper focuses on the classification and cryptanalysis of a particular kind of unified structures which covers the vast majority of known situations and is named regular unified structure. The main results are as follows:
> 
> First of all, we give the definition of Affine Equivalence between different structures, present a condition for two regular structures being affine equivalent, and give two normalized forms of a regular unified structure. Surprisingly, we find that a target-heavy generalised Feistel cipher is always affine equivalent to a source-heavy generalised Feistel cipher with the same round function, which shows these two structures always have almost the same cryptographic properties.
> 
> Secondly, we give the definition of a Self-Equivalent structure, whose dual structure is affine equivalent to the structure itself. We prove that there is a large portion of the unified structures such as the SM4 and the Mars structures that are among the self-equivalent ones. For these structures, there is a one-to-one correspondence between the impossible differentials and the zero correlation linear hulls, which illustrates that the longest integral of a self-equivalent structure covers at least the rounds of the longest zero correlation linear hull/impossible differential.
> 
> At last, we give the definition of the Refined Full-Diffusion Round of a structure, and exploit the \(\epsilon \)-\(\delta \) technique to compute this value, which can be further used to give provable security evaluations of unified structures against impossible differential and zero correlation linear cryptanalysis. For example, we prove that both the longest impossible differential and zero correlation linear hull of the d-branch SM4-like structures cover exactly \(3d-1\) rounds.
> 
> Our results could give new guidelines for both the cryptanalysis and the design of Feistel-like ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_9](https://doi.org/10.1007/978-3-031-68385-5_9)
## Succinctly-Committing Authenticated Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### Abstract
> Recent attacks and applications have led to the need for symmetric encryption schemes that, in addition to providing the usual authenticity and privacy, are also committing. In response, many committing authenticated encryption schemes have been proposed. However, all known schemes, in order to provide s bits of committing security, suffer an expansion—this is the length of the ciphertext minus the length of the plaintext—of 2s bits. This incurs a cost in bandwidth or storage. (We typically want \(s=128\), leading to 256-bit expansion.) However, it has been considered unavoidable due to birthday attacks. We show how to bypass this limitation. We give authenticated encryption (AE) schemes that provide s bits of committing security, yet suffer expansion only around s as long as messages are long enough, namely more than s bits. We call such schemes succinct. We do this via a generic, ciphertext-shortening transform called \(\textsf{SC}\): given an AE scheme with 2s-bit expansion, \(\textsf{SC}\) returns an AE scheme with s-bit expansion while preserving committing security. \(\textsf{SC}\) is very efficient; an AES-based instantiation has overhead just two AES calls. As a tool, \(\textsf{SC}\) uses a collision-resistant invertible PRF called \(\textsf{HtM}\), that we design, and whose analysis is technically difficult. To add the committing security that \(\textsf{SC}\) assumes to a base scheme, we also give a transform \(\textsf{CTY}\) that improves Chan and Rogaway’s \(\textsf{CTX}\). Our results hold in a general framework for authenticated encryption that includes both classical AEAD and AE2 (also called nonce-hiding AE) as special cases, so that we in particular obtain succinctly-committing AE schemes for both these settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_10](https://doi.org/10.1007/978-3-031-68385-5_10)
## HAWKEYE - Recovering Symmetric Cryptography From Hardware Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)
### Authors
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
* Julian Speith, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
### Abstract
> We present the first comprehensive approach for detecting and analyzing symmetric cryptographic primitives in gate-level descriptions of hardware. To capture both ASICs and FPGAs, we model the hardware as a directed graph, where gates become nodes and wires become edges. For modern chips, those graphs can easily consist of hundreds of thousands of nodes. More abstractly, we find subgraphs corresponding to cryptographic primitives in a potentially huge graph, the sea-of-gates, describing an entire chip. As we are particularly interested in unknown cryptographic algorithms, we cannot rely on searching for known parts such as S-boxes or round constants. Instead, we are looking for parts of the chip that perform highly local computations. A major result of our work is that many symmetric algorithms can be reliably located and sometimes even identified by our approach, which we call HAWKEYE. Our findings are verified by extensive experimental results, which involve SPN, ARX, Feistel, and LFSR-based ciphers implemented for both FPGAs and ASICs. We demonstrate the real-world applicability of HAWKEYE by evaluating it on OpenTitan’s Earl Grey chip, an open-source secure micro-controller design. HAWKEYE locates all major cryptographic primitives present in the netlist comprising 424 341 gates in 44.3 s.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_11](https://doi.org/10.1007/978-3-031-68385-5_11)
## Tight Characterizations for Preprocessing Against Cryptographic Salting.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)
### Authors
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Qipeng Liu, University of California San Diego, San Diego, CA, USA
* Kewen Wu, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Cryptography often considers the strongest yet plausible attacks in the real world. Preprocessing (a.k.a. non-uniform attack) plays an important role in both theory and practice: an efficient online attacker can take advantage of advice prepared by a time-consuming preprocessing stage.
> 
> Salting is a heuristic strategy to counter preprocessing attacks by feeding a small amount of randomness to the cryptographic primitive. We present general and tight characterizations of preprocessing against cryptographic salting, with upper bounds matching the advantages of the most intuitive attack. Our result quantitatively strengthens the previous work by Coretti, Dodis, Guo, and Steinberger (EUROCRYPT’18). Our proof exploits a novel connection between the non-uniform security of salted games and direct product theorems for memoryless algorithms.
> 
> For quantum adversaries, we give similar characterizations for property finding games, resolving an open problem of the quantum non-uniform security of salted collision resistant hash by Chung, Guo, Liu, and Qian (FOCS’20). Our proof extends the compressed oracle framework of Zhandry (CRYPTO’19) to prove quantum strong direct product theorems for property finding games in the average-case hardness.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_12](https://doi.org/10.1007/978-3-031-68385-5_12)
## Algebraic Structure of the Iterates of χ.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)
### Authors
* Björn Kriepke, Institute of Mathematics, University of Rostock, Rostock, Germany
* Gohar Kyureghyan, Institute of Mathematics, University of Rostock, Rostock, Germany
### Abstract
> We consider the map \(\chi :\mathbb {F}_2^n\rightarrow \mathbb {F}_2^n\) for n odd given by \(y=\chi (x)\) with \(y_i=x_i+x_{i+2}(1+x_{i+1})\), where the indices are computed modulo n. We suggest a generalization of the map \(\chi \) which we call generalized \(\chi \)-maps. We show that these maps form an Abelian group which is isomorphic to the group of units in \(\mathbb {F}_2[X]/(X^{(n+1)/2})\). Using this isomorphism we easily obtain closed-form expressions for iterates of \(\chi \) and explain their properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_13](https://doi.org/10.1007/978-3-031-68385-5_13)
## The Committing Security of MACs with Applications to Generic Composition.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)
### Authors
* Yaobin Shen, School of Informatics, Xiamen University, Xiamen, China
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Bishwajit Chakraborty, Nanyang Technological University, Singapore, Singapore
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Avijit Dutta, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
* Jérôme Govinden, Technische Universität Darmstadt, Darmstadt, Germany
* Avijit Dutta, Academy of Scientific and Innovative Research (AcSIR), Ghaziabad, 201002, India
### Abstract
> Message Authentication Codes (MACs) are ubiquitous primitives deployed in multiple flavors through standards such as HMAC, CMAC, GMAC, LightMAC, and many others Its versatility makes it an essential building block in applications necessitating message authentication and integrity checks, in authentication protocols, authenticated encryption schemes, or as a pseudorandom or key derivation function. Its usage in this variety of settings makes it susceptible to a broad range of attack scenarios. The latest attack trends leverage a lack of commitment or context-discovery security in AEAD schemes and these attacks are mainly due to the weakness in the underlying MAC part. However, these new attack models have been scarcely analyzed for MACs themselves. This paper provides a thorough treatment of MACs committing and context-discovery security. We reveal that commitment and context-discovery security of MACs have their own interest by highlighting real-world vulnerable scenarios. We formalize the required security notions for MACs, and analyze the security of standardized MACs for these notions. Additionally, as a constructive application, we analyze generic AEAD composition and provide simple and efficient ways to build committing and context-discovery secure AEADs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_14](https://doi.org/10.1007/978-3-031-68385-5_14)
## Information-Theoretic Security with Asymmetries.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)
### Authors
* Tim Beyne, COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, COSIC, KU Leuven, Leuven, Belgium
### Abstract
> In this paper, we study the problem of lower bounding any given cost function depending on the false positive and false negative probabilities of adversaries against indistinguishability security notions in symmetric-key cryptography. We take the cost model as an input, so that this becomes a purely information-theoretical question.
> 
> We propose power bounds as an easy-to-use alternative for advantage bounds in the context of indistinguishability with asymmetric cost functions. We show that standard proof techniques such as hybrid arguments and the H-coefficient method can be generalized to the power model, and apply these techniques to the PRP-PRF switching lemma, the Even-Mansour (\(\textsf{EM}\)) construction, and the sum-of-permutations (\(\textsf{SoP}\)) construction.
> 
> As the final and perhaps most useful contribution, we provide two methods to convert single-user power bounds into multi-user power bounds, and investigate their relation to the point-wise proximity method of Hoang and Tessaro (Crypto 2016). These method are applied to obtain tight multi-user power bounds for \(\textsf{EM}\) and \(\textsf{SoP}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_15](https://doi.org/10.1007/978-3-031-68385-5_15)
## Generic MitM Attack Frameworks on Sponge Constructions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#generic-mitm-attack-frameworks-on-sponge-constructions)
### Authors
* Xiaoyang Dong, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, People’s Republic of China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Boxin Zhao, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, People’s Republic of China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, People’s Republic of China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, People’s Republic of China
* Qingliang Hou, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, People’s Republic of China
* Shun Zhang, PLA Strategic Support Force Information Engineering University, Zhengzhou, People’s Republic of China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, People’s Republic of China
### Abstract
> This paper proposes general meet-in-the-middle (MitM) attack frameworks for preimage and collision attacks on hash functions based on (generalized) sponge construction. As the first contribution, our MitM preimage attack framework covers a wide range of sponge-based hash functions, especially those with lower claimed security level for preimage compared to their output size. Those hash functions have been very widely standardized (e.g., Ascon-Hash, PHOTON, etc.), but are rarely studied against preimage attacks. Even the recent MitM attack framework on sponge construction by Qin et al. (EUROCRYPT 2023) cannot attack those hash functions. As the second contribution, our MitM collision attack framework shows a different tool for the collision cryptanalysis on sponge construction, while previous collision attacks on sponge construction are mainly based on differential attacks. Most of the results in this paper are the first third-party cryptanalysis results. If cryptanalysis previously existed, our new results significantly improve the previous results, such as improving the previous 2-round collision attack on Ascon-Hash to the current 4 rounds, improving the previous 3.5-round quantum preimage attack on \(\text {SPHINCS}^+\)-Haraka to our 4-round classical preimage attack, etc.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_1](https://doi.org/10.1007/978-3-031-68385-5_1)
## Revisiting Differential-Linear Attacks via a Boomerang Perspective with Application to AES, Ascon, CLEFIA, SKINNY, PRESENT, KNOT, TWINE, WARP, LBlock, Simeck, and SERPENT.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#revisiting-differential-linear-attacks-via-a-boomerang-perspective-with-application-to-aes-ascon-clefia-skinny-present-knot-twine-warp-lblock-simeck-and-serpent)
### Authors
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Patrick Derbez, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> In 1994, Langford and Hellman introduced differential-linear (DL) cryptanalysis, with the idea of decomposing the block cipher E into two parts, \(E_{u}\) and \(E_{\ell }\), such that \(E_{u}\) exhibits a high-probability differential trail, while \(E_{\ell }\) has a high-correlation linear trail. Combining these trails forms a distinguisher for E, assuming independence between \(E_{u}\) and \(E_{\ell }\). The dependency between the two parts of DL distinguishers remained unaddressed until EUROCRYPT 2019, where Bar-On et al. [3] introduced the DLCT framework, resolving the issue up to one S-box layer. However, extending the DLCT framework to formalize the dependency between the two parts for multiple rounds remained an open problem. In this paper, we first tackle this problem from the perspective of boomerang analysis. By examining the relationships between DLCT, DDT, and LAT, we introduce a set of new tables facilitating the formulation of dependencies between the two parts of the DL distinguisher across multiple rounds. Then, we introduce a highly versatile and easy-to-use automatic tool for exploring DL distinguishers, inspired by automatic tools for boomerang distinguishers. This tool considers the dependency between differential and linear trails across multiple rounds. We apply our tool to various symmetric-key primitives, and in all applications, we either present the first DL distinguishers or enhance the best-known ones. We achieve successful results against Ascon, AES, SERPENT, PRESENT, SKINNY, TWINE, CLEFIA, WARP, LBlock, Simeck, and KNOT. Furthermore, we demonstrate that, in some cases, DL distinguishers outperform boomerang distinguishers significantly.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_2](https://doi.org/10.1007/978-3-031-68385-5_2)
## Speeding Up Preimage and Key-Recovery Attacks with Highly Biased Differential-Linear Approximations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#speeding-up-preimage-and-key-recovery-attacks-with-highly-biased-differential-linear-approximations)
### Authors
* Zhongfeng Niu, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Zhiyu Zhang, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> We present a framework for speeding up the search for preimages of candidate one-way functions based on highly biased differential-linear distinguishers. It is naturally applicable to preimage attacks on hash functions. Further, a variant of this framework applied to keyed functions leads to accelerated key-recovery attacks. Interestingly, our technique is able to exploit related-key differential-linear distinguishers in the single-key model without querying the target encryption oracle with unknown but related keys. This is in essence similar to how we speed up the key search based on the well known complementation property of DES, which calls for caution from the designers in building primitives meant to be secure in the single-key setting without a thorough cryptanalysis in the related-key model. We apply the method to sponge-based hash function Ascon-HASH, XOFs XOEsch/Ascon-XOF and AEAD Schwaemm, etc. Accelerated preimage or key-recovery attacks are obtained. Note that all the differential-linear distinguishers employed in this work are highly biased and thus can be experimentally verified.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_3](https://doi.org/10.1007/978-3-031-68385-5_3)
## Improving Generic Attacks Using Exceptional Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#improving-generic-attacks-using-exceptional-functions)
### Authors
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, LORIA, Nancy, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Gaëtan Leurent, Inria, Paris, France
* André Schrottenloher, Univ Rennes, Inria, CNRS, IRISA, Rennes, France
### Abstract
> Over the past ten years, there have been many attacks on symmetric constructions using the statistical properties of random functions. Initially, these attacks targeted iterated hash constructions and their combiners, developing a wide array of methods based on internal collisions and on the average behavior of iterated random functions. More recently, Gilbert et al. (EUROCRYPT 2023) introduced a forgery attack on so-called duplex-based Authenticated Encryption modes which was based on exceptional random functions, i.e., functions whose graph admits a large component with an exceptionally small cycle.
> 
> In this paper, we expand the use of such functions in generic cryptanalysis with several new attacks. First, we improve the attack of Gilbert et al. from \(\mathcal {O}(2^{3c/4})\) to \(\mathcal {O}(2^{2c/3})\), where c is the capacity. This new attack uses a nested pair of functions with exceptional behavior, where the second function is defined over the cycle of the first one. Next, we introduce several new generic attacks against hash combiners, notably using small cycles to improve the complexities of the best existing attacks on the XOR combiner, Zipper Hash and Hash-Twice.
> 
> Last but not least, we propose the first quantum second preimage attack against Hash-Twice, reaching a quantum complexity \(\mathcal {O}(2^{3n/7})\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_4](https://doi.org/10.1007/978-3-031-68385-5_4)
## The Algebraic FreeLunch: Efficient Gröbner Basis Attacks Against Arithmetization-Oriented Primitives.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-algebraic-freelunch-efficient-gr-bner-basis-attacks-against-arithmetization-oriented-primitives)
### Authors
* Augustin Bariant, ANSSI, Paris, France
* Augustin Bariant, Inria, Paris, France
* Aurélien Boeuf, Inria, Paris, France
* Axel Lemoine, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* Irati Manterola Ayala, Simula UiB, Bergen, Norway
* Morten Øygarden, Simula UiB, Bergen, Norway
* Håvard Raddum, Simula UiB, Bergen, Norway
* Axel Lemoine, DGA, Paris, France
### Abstract
> In this paper, we present a new type of algebraic attack that applies to many recent arithmetization-oriented families of permutations, such as those used in Griffin, Anemoi, ArionHash, and XHash8, whose security relies on the hardness of the constrained-input constrained-output (CICO) problem. We refer to the attack as the FreeLunch approach: the monomial ordering is chosen so that the natural polynomial system encoding the CICO problem already is a Gröbner basis. In addition, we present a new dedicated resolution algorithm for FreeLunch systems of complexity lower than current state-of-the-art resolution algorithms.
> 
> We show that the FreeLunch approach challenges the security of full-round instances of Anemoi, Arion and Griffin, and we experimentally confirm these theoretical results. In particular, combining the FreeLunch attack with a new technique to bypass 3 rounds of Griffin, we recover a CICO solution for 7 out of 10 rounds of Griffin in less than four hours on one core of AMD EPYC 7352 (2.3 GHz).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_5](https://doi.org/10.1007/978-3-031-68385-5_5)
## New Approaches for Estimating the Bias of Differential-Linear Distinguishers.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#new-approaches-for-estimating-the-bias-of-differential-linear-distinguishers)
### Authors
* Ting Peng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Wentao Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Jingsui Weng, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Tianyou Ding, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, CAS, Beijing, China
* Ting Peng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wentao Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jingsui Weng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Tianyou Ding, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Differential-linear cryptanalysis was introduced by Langford and Hellman in 1994 and has been extensively studied since then. In 2019, Bar-On et al. presented the Differential-Linear Connectivity Table (DLCT), which connects the differential part and the linear part, thus an attacked cipher is divided to 3 subciphers: the differential part, the DLCT part, and the linear part.
> 
> In this paper, we firstly present an accurate mathematical formula which establishes a relation between differential-linear and truncated differential cryptanalysis. Using the formula, the bias estimate of a differential-linear distinguisher can be converted to the probability calculations of a series of truncated differentials. Then, we propose a novel and natural concept, the TDT, which can be used to accelerate the calculation of the probabilities of truncated differentials. Based on the formula and the TDT, we propose two novel approaches for estimating the bias of a differential-linear distinguisher. We demonstrate the accuracy and efficiency of our new approaches by applying them to 5 symmetric-key primitives: Ascon, Serpent, KNOT, AES, and CLEFIA. For Ascon and Serpent, we update the best known differential-linear distinguishers. For KNOT, AES, and CLEFIA, for the first time we give the theoretical differential-linear biases for different rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_6](https://doi.org/10.1007/978-3-031-68385-5_6)
## Time-Memory Trade-Offs Sound the Death Knell for GPRS and GSM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#time-memory-trade-offs-sound-the-death-knell-for-gprs-and-gsm)
### Authors
* Gildas Avoine, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Tristan Claverie, INSA Rennes, Univ Rennes, IRISA, CNRS, Rennes, France
* Xavier Carpent, University of Nottingham, Nottingham, UK
* Tristan Claverie, ANSSI, Paris, France
* Christophe Devine, ANSSI, Paris, France
* Diane Leblanc-Albarel, KU Leuven, Leuven, Belgium
### Abstract
> This paper introduces a practical TMTO-based attack against GSM (A5/3) and GPRS (GEA-3), which are both technologies used in 2G mobile networks. Although designed in the 80 s, these networks are still quite active today, especially for embedded systems. While active attacks against 2G networks with a fake base station were already known for a while, the attacks introduced in this paper rely on a passive attacker. We explain in this paper how to find material in GPRS and GSM communications to perform a TMTO attack. We performed validation experiments with off-the-shelf devices operated in real-life networks. We provide the success probability of the attack and its performances for several real-life scenarios. We optimized the implementation of KASUMI with AVX2 instructions, and designed a specific TMTO implementation to get around the SSD access latency. As a motivating example, an attacker passively eavesdropping a GSM communication between a target and a base station can decrypt any 2-h call with probability 0.43, in 14 min.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_7](https://doi.org/10.1007/978-3-031-68385-5_7)
## Probabilistic Linearization: Internal Differential Collisions in up to 6 Rounds of SHA-3.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#probabilistic-linearization-internal-differential-collisions-in-up-to-6-rounds-of-sha-3)
### Authors
* Zhongyi Zhang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### Abstract
> The \(\texttt {SHA}\text {-} \texttt {3}\) standard consists of four cryptographic hash functions, called SHA3-224, SHA3-256, SHA3-384 and SHA3-512, and two extendable-output functions (XOFs), called SHAKE128 and \(\texttt {SHAKE256}\). In this paper, we study the collision resistance of the \(\texttt {SHA}\text {-} \texttt {3}\) instances. By analyzing the nonlinear layer, we introduce the concept of maximum difference density subspace, and develop a new target internal difference algorithm by probabilistic linearization. We also exploit new strategies for optimizing the internal differential characteristic. Furthermore, we figure out the expected size of collision subsets in internal differentials, by analyzing the collision probability of the digests rather than the intermediate states input to the last nonlinear layer. These techniques enhance the analysis of internal differentials, leading to the best collision attacks on four round-reduced variants of the \(\texttt {SHA}\text {-} \texttt {3}\) instances. In particular, the number of attacked rounds is extended to 5 from 4 for SHA3-384, and to 6 from 5 for \(\texttt {SHAKE256}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_8](https://doi.org/10.1007/978-3-031-68385-5_8)
## Feistel-Like Structures Revisited: Classification and Cryptanalysis.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#feistel-like-structures-revisited-classification-and-cryptanalysis)
### Authors
* Bing Sun, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, College of Science, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zejun Xiang, School of Cyber Science and Technology, Hubei University, Wuhan, 430062, Hubei, People’s Republic of China
* Bing Sun, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Guoqiang Liu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Longjiang Qu, Center for Cryptologic Research, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Zhengyi Dai, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Shaojing Fu, College of Computers, National University of Defense Technology, Changsha, 410073, Hunan, People’s Republic of China
* Xuan Shen, College of Information and Communication, National University of Defense Technology, Wuhan, 430010, Hubei, People’s Republic of China
### Abstract
> In 2023, Liu et al. summarized the Feistel-like structures which use a single round function, and proposed a unified form of these structures which is named the unified structure. This paper focuses on the classification and cryptanalysis of a particular kind of unified structures which covers the vast majority of known situations and is named regular unified structure. The main results are as follows:
> 
> First of all, we give the definition of Affine Equivalence between different structures, present a condition for two regular structures being affine equivalent, and give two normalized forms of a regular unified structure. Surprisingly, we find that a target-heavy generalised Feistel cipher is always affine equivalent to a source-heavy generalised Feistel cipher with the same round function, which shows these two structures always have almost the same cryptographic properties.
> 
> Secondly, we give the definition of a Self-Equivalent structure, whose dual structure is affine equivalent to the structure itself. We prove that there is a large portion of the unified structures such as the SM4 and the Mars structures that are among the self-equivalent ones. For these structures, there is a one-to-one correspondence between the impossible differentials and the zero correlation linear hulls, which illustrates that the longest integral of a self-equivalent structure covers at least the rounds of the longest zero correlation linear hull/impossible differential.
> 
> At last, we give the definition of the Refined Full-Diffusion Round of a structure, and exploit the \(\epsilon \)-\(\delta \) technique to compute this value, which can be further used to give provable security evaluations of unified structures against impossible differential and zero correlation linear cryptanalysis. For example, we prove that both the longest impossible differential and zero correlation linear hull of the d-branch SM4-like structures cover exactly \(3d-1\) rounds.
> 
> Our results could give new guidelines for both the cryptanalysis and the design of Feistel-like ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_9](https://doi.org/10.1007/978-3-031-68385-5_9)
## Succinctly-Committing Authenticated Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#succinctly-committing-authenticated-encryption)
### Authors
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
### Abstract
> Recent attacks and applications have led to the need for symmetric encryption schemes that, in addition to providing the usual authenticity and privacy, are also committing. In response, many committing authenticated encryption schemes have been proposed. However, all known schemes, in order to provide s bits of committing security, suffer an expansion—this is the length of the ciphertext minus the length of the plaintext—of 2s bits. This incurs a cost in bandwidth or storage. (We typically want \(s=128\), leading to 256-bit expansion.) However, it has been considered unavoidable due to birthday attacks. We show how to bypass this limitation. We give authenticated encryption (AE) schemes that provide s bits of committing security, yet suffer expansion only around s as long as messages are long enough, namely more than s bits. We call such schemes succinct. We do this via a generic, ciphertext-shortening transform called \(\textsf{SC}\): given an AE scheme with 2s-bit expansion, \(\textsf{SC}\) returns an AE scheme with s-bit expansion while preserving committing security. \(\textsf{SC}\) is very efficient; an AES-based instantiation has overhead just two AES calls. As a tool, \(\textsf{SC}\) uses a collision-resistant invertible PRF called \(\textsf{HtM}\), that we design, and whose analysis is technically difficult. To add the committing security that \(\textsf{SC}\) assumes to a base scheme, we also give a transform \(\textsf{CTY}\) that improves Chan and Rogaway’s \(\textsf{CTX}\). Our results hold in a general framework for authenticated encryption that includes both classical AEAD and AE2 (also called nonce-hiding AE) as special cases, so that we in particular obtain succinctly-committing AE schemes for both these settings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_10](https://doi.org/10.1007/978-3-031-68385-5_10)
## HAWKEYE - Recovering Symmetric Cryptography From Hardware Circuits.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#hawkeye-recovering-symmetric-cryptography-from-hardware-circuits)
### Authors
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Christof Paar, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
* Julian Speith, Max Planck Institute for Security and Privacy (MPI-SP), Bochum, Germany
### Abstract
> We present the first comprehensive approach for detecting and analyzing symmetric cryptographic primitives in gate-level descriptions of hardware. To capture both ASICs and FPGAs, we model the hardware as a directed graph, where gates become nodes and wires become edges. For modern chips, those graphs can easily consist of hundreds of thousands of nodes. More abstractly, we find subgraphs corresponding to cryptographic primitives in a potentially huge graph, the sea-of-gates, describing an entire chip. As we are particularly interested in unknown cryptographic algorithms, we cannot rely on searching for known parts such as S-boxes or round constants. Instead, we are looking for parts of the chip that perform highly local computations. A major result of our work is that many symmetric algorithms can be reliably located and sometimes even identified by our approach, which we call HAWKEYE. Our findings are verified by extensive experimental results, which involve SPN, ARX, Feistel, and LFSR-based ciphers implemented for both FPGAs and ASICs. We demonstrate the real-world applicability of HAWKEYE by evaluating it on OpenTitan’s Earl Grey chip, an open-source secure micro-controller design. HAWKEYE locates all major cryptographic primitives present in the netlist comprising 424 341 gates in 44.3 s.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_11](https://doi.org/10.1007/978-3-031-68385-5_11)
## Tight Characterizations for Preprocessing Against Cryptographic Salting.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#tight-characterizations-for-preprocessing-against-cryptographic-salting)
### Authors
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Qipeng Liu, University of California San Diego, San Diego, CA, USA
* Kewen Wu, University of California, Berkeley, Berkeley, CA, USA
### Abstract
> Cryptography often considers the strongest yet plausible attacks in the real world. Preprocessing (a.k.a. non-uniform attack) plays an important role in both theory and practice: an efficient online attacker can take advantage of advice prepared by a time-consuming preprocessing stage.
> 
> Salting is a heuristic strategy to counter preprocessing attacks by feeding a small amount of randomness to the cryptographic primitive. We present general and tight characterizations of preprocessing against cryptographic salting, with upper bounds matching the advantages of the most intuitive attack. Our result quantitatively strengthens the previous work by Coretti, Dodis, Guo, and Steinberger (EUROCRYPT’18). Our proof exploits a novel connection between the non-uniform security of salted games and direct product theorems for memoryless algorithms.
> 
> For quantum adversaries, we give similar characterizations for property finding games, resolving an open problem of the quantum non-uniform security of salted collision resistant hash by Chung, Guo, Liu, and Qian (FOCS’20). Our proof extends the compressed oracle framework of Zhandry (CRYPTO’19) to prove quantum strong direct product theorems for property finding games in the average-case hardness.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_12](https://doi.org/10.1007/978-3-031-68385-5_12)
## Algebraic Structure of the Iterates of χ.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#algebraic-structure-of-the-iterates-of)
### Authors
* Björn Kriepke, Institute of Mathematics, University of Rostock, Rostock, Germany
* Gohar Kyureghyan, Institute of Mathematics, University of Rostock, Rostock, Germany
### Abstract
> We consider the map \(\chi :\mathbb {F}_2^n\rightarrow \mathbb {F}_2^n\) for n odd given by \(y=\chi (x)\) with \(y_i=x_i+x_{i+2}(1+x_{i+1})\), where the indices are computed modulo n. We suggest a generalization of the map \(\chi \) which we call generalized \(\chi \)-maps. We show that these maps form an Abelian group which is isomorphic to the group of units in \(\mathbb {F}_2[X]/(X^{(n+1)/2})\). Using this isomorphism we easily obtain closed-form expressions for iterates of \(\chi \) and explain their properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_13](https://doi.org/10.1007/978-3-031-68385-5_13)
## The Committing Security of MACs with Applications to Generic Composition.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#the-committing-security-of-macs-with-applications-to-generic-composition)
### Authors
* Yaobin Shen, School of Informatics, Xiamen University, Xiamen, China
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Bishwajit Chakraborty, Nanyang Technological University, Singapore, Singapore
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Avijit Dutta, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
* Jérôme Govinden, Technische Universität Darmstadt, Darmstadt, Germany
* Avijit Dutta, Academy of Scientific and Innovative Research (AcSIR), Ghaziabad, 201002, India
### Abstract
> Message Authentication Codes (MACs) are ubiquitous primitives deployed in multiple flavors through standards such as HMAC, CMAC, GMAC, LightMAC, and many others Its versatility makes it an essential building block in applications necessitating message authentication and integrity checks, in authentication protocols, authenticated encryption schemes, or as a pseudorandom or key derivation function. Its usage in this variety of settings makes it susceptible to a broad range of attack scenarios. The latest attack trends leverage a lack of commitment or context-discovery security in AEAD schemes and these attacks are mainly due to the weakness in the underlying MAC part. However, these new attack models have been scarcely analyzed for MACs themselves. This paper provides a thorough treatment of MACs committing and context-discovery security. We reveal that commitment and context-discovery security of MACs have their own interest by highlighting real-world vulnerable scenarios. We formalize the required security notions for MACs, and analyze the security of standardized MACs for these notions. Additionally, as a constructive application, we analyze generic AEAD composition and provide simple and efficient ways to build committing and context-discovery secure AEADs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_14](https://doi.org/10.1007/978-3-031-68385-5_14)
## Information-Theoretic Security with Asymmetries.
🌍 **[English](../../../docs/en/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-4].md#information-theoretic-security-with-asymmetries)
### Authors
* Tim Beyne, COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, COSIC, KU Leuven, Leuven, Belgium
### Abstract
> In this paper, we study the problem of lower bounding any given cost function depending on the false positive and false negative probabilities of adversaries against indistinguishability security notions in symmetric-key cryptography. We take the cost model as an input, so that this becomes a purely information-theoretical question.
> 
> We propose power bounds as an easy-to-use alternative for advantage bounds in the context of indistinguishability with asymmetric cost functions. We show that standard proof techniques such as hybrid arguments and the H-coefficient method can be generalized to the power model, and apply these techniques to the PRP-PRF switching lemma, the Even-Mansour (\(\textsf{EM}\)) construction, and the sum-of-permutations (\(\textsf{SoP}\)) construction.
> 
> As the final and perhaps most useful contribution, we provide two methods to convert single-user power bounds into multi-user power bounds, and investigate their relation to the point-wise proximity method of Hoang and Tessaro (Crypto 2016). These method are applied to obtain tight multi-user power bounds for \(\textsf{EM}\) and \(\textsf{SoP}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-68385-5_15](https://doi.org/10.1007/978-3-031-68385-5_15)
