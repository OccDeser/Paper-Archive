# Eurocrypt[2023-4]
## Truncated Boomerang Attacks and Application to AES-Based Ciphers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#truncated-boomerang-attacks-and-application-to-aes-based-ciphers)
### Authors
* Augustin Bariant, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
### Abstract
> The boomerang attack is a cryptanalysis technique that combines two short differentials instead of using a single long differential. It has been applied to many primitives, and results in the best known attacks against several AES-based ciphers (Kiasu-BC, Deoxys-BC). In this paper, we introduce a general framework for boomerang attacks with truncated differentials.
> 
> We show that the use of truncated differentials provides a significant improvement over the best boomerang attacks in the literature. In particular, we take into account structures on the plaintext and ciphertext sides, and include an analysis of the key recovery step. On 6-round AES, we obtain a competitive structural distinguisher with complexity \(2^{87}\) and a key recovery attack with complexity \(2^{61}\).
> 
> The truncated boomerang attack is particularly effective against tweakable AES variants. We apply it to 8-round Kiasu-BC, resulting in the best known attack with complexity \(2^{83}\) (rather than \(2^{103}\)). We also show an interesting use of the 6-round distinguisher on the full TNT-AES, a tweakable block cipher using 6-round AES as a building block. Finally, we apply this framework to Deoxys-BC, using a MILP model to find optimal trails automatically. We obtain the best attacks against round-reduced versions of all variants of Deoxys-BC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_1](https://doi.org/10.1007/978-3-031-30634-1_1)
## Better Steady than Speedy: Full Break of SPEEDY-7-192.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#better-steady-than-speedy-full-break-of-speedy-7-192)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#better-steady-than-speedy-full-break-of-speedy-7-192)
### Authors
* Christina Boura, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, 78000, Versailles, France
* Nicolas David, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
### Abstract
> Differential attacks are among the most important families of cryptanalysis against symmetric primitives. Since their introduction in 1990, several improvements to the basic technique as well as many dedicated attacks against symmetric primitives have been proposed. Most of the proposed improvements concern the key-recovery part. However, when designing a new primitive, the security analysis regarding differential attacks is often limited to finding the best trails over a limited number of rounds with branch and bound techniques, and a poor heuristic is then applied to deduce the total number of rounds a differential attack could reach. In this work we analyze the security of the SPEEDY family of block ciphers against differential cryptanalysis and show how to optimize many of the steps of the key-recovery procedure for this type of attacks. For this, we implemented a search for finding optimal trails for this cipher and their associated multiple probabilities under some constraints and applied non-trivial techniques to obtain optimal data and key-sieving. This permitted us to fully break SPEEDY-7-192, the 7-round variant of SPEEDY supposed to provide 192-bit security. Our work demonstrates among others the need to better understand the subtleties of differential cryptanalysis in order to get meaningful estimates on the security offered by a cipher against these attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_2](https://doi.org/10.1007/978-3-031-30634-1_2)
## Exploiting Non-full Key Additions: Full-Fledged Automatic Demirci-Selçuk Meet-in-the-Middle Cryptanalysis of SKINNY.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#exploiting-non-full-key-additions-full-fledged-automatic-demirci-sel-uk-meet-in-the-middle-cryptanalysis-of-skinny)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#exploiting-non-full-key-additions-full-fledged-automatic-demirci-sel-uk-meet-in-the-middle-cryptanalysis-of-skinny)
### Authors
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Ling Song, Jinan University, Guangzhou, China
### Abstract
> The Demirci-Selçuk meet-in-the-middle (DS-MITM) attack is a sophisticated variant of differential attacks. Due to its sophistication, it is hard to efficiently find the best DS-MITM attacks on most ciphers except for AES. Moreover, the current automatic tools only capture the most basic version of DS-MITM attacks, and the critical techniques developed for enhancing the attacks (e.g., differential enumeration and key-dependent-sieve) still rely on manual work. In this paper, we develop a full-fledged automatic framework integrating all known techniques (differential enumeration, key-dependent-sieve, and key bridging, etc.) for the DS-MITM attack that can produce key-recovery attacks directly rather than only search for distinguishers. Moreover, we develop a new technique that is able to exploit partial key additions to generate more linear relations beneficial to the attacks. We apply the framework to the SKINNY family of block ciphers and significantly improved results are obtained. In particular, all known DS-MITM attacks on the respective versions of SKINNY are improved by at least 2 rounds, and the data, memory, or time complexities of some attacks are reduced even compared to previous best attacks penetrating less rounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_3](https://doi.org/10.1007/978-3-031-30634-1_3)
## Efficient Detection of High Probability Statistical Properties of Cryptosystems via Surrogate Differentiation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#efficient-detection-of-high-probability-statistical-properties-of-cryptosystems-via-surrogate-differentiation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#efficient-detection-of-high-probability-statistical-properties-of-cryptosystems-via-surrogate-differentiation)
### Authors
* Itai Dinur, Computer Science Department, Ben Gurion University, Be’er Sheva, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Eyal Ronen, Computer Science Department, Tel Aviv University, Tel Aviv-Yafo, Israel
* Adi Shamir, Computer Science Department, Weizmann Institute of Science, Rehovot, Israel
### Abstract
> A central problem in cryptanalysis is to find all the significant deviations from randomness in a given n-bit cryptographic primitive. When n is small (e.g., an 8-bit S-box), this is easy to do, but for large n, the only practical way to find such statistical properties was to exploit the internal structure of the primitive and to speed up the search with a variety of heuristic rules of thumb. However, such bottom-up techniques can miss many properties, especially in cryptosystems which are designed to have hidden trapdoors.
> 
> In this paper we consider the top-down version of the problem in which the cryptographic primitive is given as a structureless black box, and reduce the complexity of the best known techniques for finding all its significant differential and linear properties by a large factor of \(2^{n/2}\). Our main new tool is the idea of using surrogate differentiation. In the context of finding differential properties, it enables us to simultaneously find information about all the differentials of the form \(f(x) \oplus f(x \oplus \alpha )\) in all possible directions \(\alpha \) by differentiating f in a single randomly chosen direction \(\gamma \) (which is unrelated to the \(\alpha \)’s). In the context of finding linear properties, surrogate differentiation can be combined in a highly effective way with the Fast Fourier Transform. For 64-bit cryptographic primitives, this technique makes it possible to automatically find in about \(2^{64}\) time all their differentials with probability \(p \ge 2^{-32}\) and all their linear approximations with bias \(|p| \ge 2^{-16}\) (using \(2^{64}\) memory); previous algorithms for these problems required at least \(2^{96}\) time. Similar techniques can be used to significantly improve the best known time complexities of finding related key differentials, second-order differentials, and boomerangs. In addition, we show how to run variants of these algorithms which require no memory, and how to detect such statistical properties even in trapdoored cryptosystems whose designers specifically try to evade our techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_4](https://doi.org/10.1007/978-3-031-30634-1_4)
## Finding the Impossible: Automated Search for Full Impossible-Differential, Zero-Correlation, and Integral Attacks.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#finding-the-impossible-automated-search-for-full-impossible-differential-zero-correlation-and-integral-attacks)
### Authors
* Hosein Hadipour, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Sadegh Sadeghi, Department of Mathematics, Institute for Advanced Studies in Basic Sciences (IASBS), Zanjan, Iran
### Abstract
> Impossible differential (ID), zero-correlation (ZC), and integral attacks are a family of important attacks on block ciphers. For example, the impossible differential attack was the first cryptanalytic attack on 7 rounds of AES. Evaluating the security of block ciphers against these attacks is very important but also challenging: Finding these attacks usually implies a combinatorial optimization problem involving many parameters and constraints that is very hard to solve using manual approaches. Automated solvers, such as Constraint Programming (CP) solvers, can help the cryptanalyst to find suitable attacks. However, previous CP-based methods focus on finding only the ID, ZC, and integral distinguishers, often only in a limited search space. Notably, none can be extended to a unified optimization problem for finding full attacks, including efficient key-recovery steps.
> 
> In this paper, we present a new CP-based method to search for ID, ZC, and integral distinguishers and extend it to a unified constraint optimization problem for finding full ID, ZC, and integral attacks. To show the effectiveness and usefulness of our method, we applied it to several block ciphers, including SKINNY, CRAFT, SKINNYe-v2, and SKINNYee. For the ISO standard block cipher SKINNY, we significantly improve all existing ID, ZC, and integral attacks. In particular, we improve the integral attacks on SKINNY-n-3n and SKINNY-n-2n by 3 and 2 rounds, respectively, obtaining the best cryptanalytic results on these variants in the single-key setting. We improve the ZC attack on SKINNY-n-n (SKINNY-n-2n) by 2 (resp. 1) rounds. We also improve the ID attacks on all variants of SKINNY. Particularly, we improve the time complexity of the best previous single-tweakey (related-tweakey) ID attack on SKINNY-128-256 (resp. SKINNY-128-384) by a factor of \(2^{22.57}\) (resp. \(2^{15.39}\)). On CRAFT, we propose a 21-round (20-round) ID (resp. ZC) attack, which improves the best previous single-tweakey attack by 2 (resp. 1) rounds. Using our new model, we also provide several practical integral distinguishers for reduced-round SKINNY, CRAFT, and Deoxys-BC. Our method is generic and applicable to other strongly aligned block ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_5](https://doi.org/10.1007/978-3-031-30634-1_5)
## Meet-in-the-Middle Preimage Attacks on Sponge-Based Hashing.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#meet-in-the-middle-preimage-attacks-on-sponge-based-hashing)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#meet-in-the-middle-preimage-attacks-on-sponge-based-hashing)
### Authors
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, State Key Laboratory of Cryptology, P. O. Box 5159, Beijing, 100878, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Hailun Yan, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
* Lingyue Qin, National Financial Cryptography Research Center, Beijing, China
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
### Abstract
> The Meet-in-the-Middle (MitM) attack has been widely applied to preimage attacks on Merkle-Damgård (MD) hashing. In this paper, we introduce a generic framework of the MitM attack on sponge-based hashing. We find certain bit conditions can significantly reduce the diffusion of the unknown bits and lead to longer MitM characteristics. To find good or optimal configurations of MitM attacks, e.g., the bit conditions, the neutral sets, and the matching points, we introduce the bit-level MILP-based automatic tools on Keccak, Ascon and Xoodyak. To reduce the scale of bit-level models and make them solvable in reasonable time, a series of properties of the targeted hashing are considered in the modelling, such as the linear structure and CP-kernel for Keccak, the Boolean expression of Sbox for Ascon. Finally, we give an improved 4-round preimage attack on Keccak-512/SHA3, and break a nearly 10 years’ cryptanalysis record. We also give the first preimage attacks on 3-/4-round Ascon-XOF and 3-round Xoodyak-XOF.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_6](https://doi.org/10.1007/978-3-031-30634-1_6)
## Analysis of RIPEMD-160: New Collision Attacks and Finding Characteristics with MILP.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#analysis-of-ripemd-160-new-collision-attacks-and-finding-characteristics-with-milp)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#analysis-of-ripemd-160-new-collision-attacks-and-finding-characteristics-with-milp)
### Authors
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Ravi Anand, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Gaoli Wang, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Yingxin Li, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Gaoli Wang, State Key Laboratory of Cryptology, Beijing, China
* Takanori Isobe, NICT, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> The hash function RIPEMD-160 is an ISO/IEC standard and is being used to generate the bitcoin address together with SHA-256. Despite the fact that many hash functions in the MD-SHA hash family have been broken, RIPEMD-160 remains secure and the best collision attack could only reach up to 34 out of 80 rounds, which was published at CRYPTO 2019. In this paper, we propose a new collision attack on RIPEMD-160 that can reach up to 36 rounds with time complexity \(2^{64.5}\). This new attack is facilitated by a new strategy to choose the message differences and new techniques to simultaneously handle the differential conditions on both branches. Moreover, different from all the previous work on RIPEMD-160, we utilize a MILP-based method to search for differential characteristics, where we construct a model to accurately describe the signed difference transitions through its round function. As far as we know, this is the first model targeting the signed difference transitions for the MD-SHA hash family. Indeed, we are more motivated to design this model by the fact that many automatic tools to search for such differential characteristics are not publicly available and implementing them from scratch is too time-consuming and difficult. Hence, we expect that this can be an alternative easy tool for future research, which only requires to write down some simple linear inequalities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_7](https://doi.org/10.1007/978-3-031-30634-1_7)
## Collision Attacks on Round-Reduced SHA-3 Using Conditional Internal Differentials.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#collision-attacks-on-round-reduced-sha-3-using-conditional-internal-differentials)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#collision-attacks-on-round-reduced-sha-3-using-conditional-internal-differentials)
### Authors
* Zhongyi Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, People’s Republic of China
* Zhongyi Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Chengan Hou, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
* Meicheng Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, People’s Republic of China
### Abstract
> The KECCAK hash function was selected by NIST as the winner of the \(\texttt {SHA-3}\) competition in 2012 and became the \(\texttt {SHA-3}\) hash standard of NIST in 2015. On account of \(\texttt {SHA-3}\)’s importance in theory and applications, the analysis of its security has attracted increasing attention. In the \(\texttt {SHA-3}\) family, \(\texttt {SHA3-512}\) shows the strongest resistance against collision attacks: the theoretical attacks of \(\texttt {SHA3-512}\) only extend to four rounds by solving polynomial systems with 64 times faster than the birthday attack. Yet for the \(\texttt {SHA-3}\) instance SHAKE256 there are no results on collision attacks that we are aware of in the literatures.
> 
> In this paper, we study the collision attacks against round-reduced \(\texttt {SHA-3}\). Inspired by the work of Dinur, Dunkelman and Shamir in 2013, we propose a variant of birthday attack and improve the internal differential cryptanalysis by abstracting new concepts such as differential transition conditions and difference conditions table. With the help of these techniques, we develop new collision attacks on round-reduced \(\texttt {SHA-3}\) using conditional internal differentials. More exactly, the initial messages constrained by linear conditions pass through the first two rounds of internal differential, and their corresponding inputs entering the last two rounds are divided into different subsets for collision search according to the values of linear conditions. Together with an improved target internal difference algorithm (TIDA), collision attacks on up to 5 rounds of all the six \(\texttt {SHA-3}\) functions are obtained. In particular, collision attacks on 4-round \(\texttt {SHA3-512}\) and 5-round \(\texttt {SHAKE256}\) are achieved with complexity of \(2^{237}\) and \(2^{185}\) respectively. As far as we know, this is the best collision attack on reduced \(\texttt {SHA3-512}\), and it is the first collision attack on reduced \(\texttt {SHAKE256}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_8](https://doi.org/10.1007/978-3-031-30634-1_8)
## From Farfalle to Megafono via Ciminion: The PRF Hydra for MPC Applications.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#from-farfalle-to-megafono-via-ciminion-the-prf-hydra-for-mpc-applications)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#from-farfalle-to-megafono-via-ciminion-the-prf-hydra-for-mpc-applications)
### Authors
* Lorenzo Grassi, Radboud University Nijmegen, Nijmegen, The Netherlands
* Morten Øygarden, Simula UiB, Bergen, Norway
* Markus Schofnegger, Horizen Labs, Austin, USA
* Roman Walch, Graz University of Technology, Graz, Austria
* Roman Walch, Know-Center GmbH, Graz, Austria
* Roman Walch, TACEO GmbH, Graz, Austria
### Abstract
> The area of multi-party computation (MPC) has recently increased in popularity and number of use cases. At the current state of the art, Ciminion, a Farfalle-like cryptographic function, achieves the best performance in MPC applications involving symmetric primitives. However, it has a critical weakness. Its security highly relies on the independence of its subkeys, which is achieved by using an expensive key schedule. Many MPC use cases involving symmetric pseudo-random functions (PRFs) rely on secretly shared symmetric keys, and hence the expensive key schedule must also be computed in MPC. As a result, Ciminion’s performance is significantly reduced in these use cases.
> 
> In this paper we solve this problem. Following the approach introduced by Ciminion’s designers, we present a novel primitive in symmetric cryptography called Megafono. Megafono is a keyed extendable PRF, expanding a fixed-length input to an arbitrary-length output. Similar to Farfalle, an initial keyed permutation is applied to the input, followed by an expansion layer, involving the parallel application of keyed ciphers. The main novelty regards the expansion of the intermediate/internal state for “free", by appending the sum of the internal states of the first permutation to its output. The combination of this and other modifications, together with the impossibility for the attacker to have access to the input state of the expansion layer, make Megafono very efficient in the target application.
> 
> As a concrete example, we present the PRF Hydra, an instance of Megafono based on the Hades strategy and on generalized versions of the Lai–Massey scheme. Based on an extensive security analysis, we implement Hydra in an MPC framework. The results show that it outperforms all MPC-friendly schemes currently published in the literature.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_9](https://doi.org/10.1007/978-3-031-30634-1_9)
## Coefficient Grouping: Breaking Chaghri and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#coefficient-grouping-breaking-chaghri-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#coefficient-grouping-breaking-chaghri-and-more)
### Authors
* Fukang Liu, Tokyo Institute of Technology, Tokyo, Japan
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Ravi Anand, University of Hyogo, Hyogo, Japan
* Libo Wang, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, NICT, Tokyo, Japan
* Libo Wang, Jinan University, Guangzhou, China
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> We propose an efficient technique called coefficient grouping to evaluate the algebraic degree of the FHE-friendly cipher Chaghri, which has been accepted for ACM CCS 2022. It is found that the algebraic degree increases linearly rather than exponentially. As a consequence, we can construct a 13-round distinguisher with time and data complexity of \(2^{63}\) and mount a 13.5-round key-recovery attack. In particular, a higher-order differential attack on 8 rounds of Chaghri can be achieved with time and data complexity of \(2^{38}\). Hence, it indicates that the full 8 rounds are far from being secure. Furthermore, we also demonstrate the application of our coefficient grouping technique to the design of secure cryptographic components. As a result, a countermeasure is found for Chaghri and it has little overhead compared with the original design. Since more and more symmetric primitives defined over a large finite field are emerging, we believe our new technique can have more applications in the future research.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_10](https://doi.org/10.1007/978-3-031-30634-1_10)
## Pitfalls and Shortcomings for Decompositions and Alignment.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#pitfalls-and-shortcomings-for-decompositions-and-alignment)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#pitfalls-and-shortcomings-for-decompositions-and-alignment)
### Authors
* Baptiste Lambin, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Patrick Neumann, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### Abstract
> In this paper we, for the first time, study the question under which circumstances decomposing a round function of a Substitution-Permutation Network is possible uniquely. More precisely, we provide necessary and sufficient criteria for the non-linear layer on when a decomposition is unique. Our results in particular imply that, when cryptographically strong S-boxes are used, the decomposition is indeed unique. We then apply our findings to the notion of alignment, pointing out that the previous definition allows for primitives that are both aligned and unaligned simultaneously.
> 
> As a second result, we present experimental data that shows that alignment might only have limited impact. For this, we compare aligned and unaligned versions of the cipher PRESENT.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_11](https://doi.org/10.1007/978-3-031-30634-1_11)
## Generic Attack on Duplex-Based AEAD Modes Using Random Function Statistics.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#generic-attack-on-duplex-based-aead-modes-using-random-function-statistics)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#generic-attack-on-duplex-based-aead-modes-using-random-function-statistics)
### Authors
* Henri Gilbert, ANSSI, Paris, France
* Louiza Khati, ANSSI, Paris, France
* Henri Gilbert, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
* Yann Rotella, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de Mathématiques de Versailles, Versailles, France
### Abstract
> Duplex-based authenticated encryption modes with a sufficiently large key length are proven to be secure up to the birthday bound \(2^{\frac{c}{2}}\), where c is the capacity. However this bound is not known to be tight and the complexity of the best known generic attack, which is based on multicollisions, is much larger: it reaches \(\frac{2^c}{\alpha }\) where \(\alpha \) represents a small security loss factor. There is thus an uncertainty on the true extent of security beyond the bound \(2^{\frac{c}{2}}\) provided by such constructions. In this paper, we describe a new generic attack against several duplex-based AEAD modes. Our attack leverages random functions statistics and produces a forgery in time complexity \(\mathcal {O}(2^{\frac{3c}{4}})\) using negligible memory and no encryption queries. Furthermore, for some duplex-based modes, our attack recovers the secret key with a negligible amount of additional computations. Most notably, our attack breaks a security claim made by the designers of the NIST lightweight competition candidate Xoodyak. This attack is a step further towards determining the exact security provided by duplex-based constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_12](https://doi.org/10.1007/978-3-031-30634-1_12)
## Context Discovery and Commitment Attacks - How to Break CCM, EAX, SIV, and More.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#context-discovery-and-commitment-attacks-how-to-break-ccm-eax-siv-and-more)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#context-discovery-and-commitment-attacks-how-to-break-ccm-eax-siv-and-more)
### Authors
* Sanketh Menda, Cornell Tech, New York, USA
* Julia Len, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
### Abstract
> A line of recent work has highlighted the importance of context commitment security, which asks that authenticated encryption with associated data (AEAD) schemes will not decrypt the same adversarially-chosen ciphertext under two different, adversarially-chosen contexts (secret key, associated data, and nonce). Despite a spate of recent attacks, many open questions remain around context commitment; most obviously nothing is known about the commitment security of important schemes such as CCM, EAX, and SIV.
> 
> We resolve these open questions, and more. Our approach is to, first, introduce a new framework that helps us more granularly define context commitment security in terms of what portions of a context are adversarially controlled. We go on to formulate a new security notion, called context discoverability, which can be viewed as analogous to preimage resistance from the hashing literature. We show that unrestricted context commitment security (the adversary controls all of the two contexts) implies context discoverability security for a class of schemes encompassing most schemes used in practice. Then, we show new context discovery attacks against a wide set of AEAD schemes, including CCM, EAX, SIV, GCM, and OCB3, and, by our general result, this gives new unrestricted context commitment attacks against them.
> 
> Finally, we explore the case of restricted context commitment security for the original SIV mode, for which no prior attack techniques work (including our context discovery based ones). We are nevertheless able to give a novel \(\mathcal {O}(2^{n/3})\) attack using Wagner’s k-tree algorithm for the generalized birthday problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_13](https://doi.org/10.1007/978-3-031-30634-1_13)
## Impossibility of Indifferentiable Iterated Blockciphers from 3 or Less Primitive Calls.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#impossibility-of-indifferentiable-iterated-blockciphers-from-3-or-less-primitive-calls)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#impossibility-of-indifferentiable-iterated-blockciphers-from-3-or-less-primitive-calls)
### Authors
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, Shandong Research Institute of Industrial Technology, Jinan, 250102, Shandong, China
* Lei Wang, Shanghai Jiaotong University, Shanghai, China
* Dongdai Lin, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### Abstract
> Virtually all modern blockciphers are iterated. In this paper, we ask: to construct a secure iterated blockcipher “non-trivially”, how many calls to random functions and permutations are necessary?
> 
> When security means indistinguishability from a random permutation, optimality is achieved by the Even-Mansour scheme using 1 call to a public permutation. We seek for the arguably strongest security indifferentiability from an ideal cipher, a notion introduced by Maurer et al. (TCC 2004) and popularized by Coron et al. (JoC, 2014).
> 
> We provide the first generic negative result/lower bounds: when the key is not too short, no iterated blockcipher making 3 calls is (statistically) indifferentiable. This proves optimality for a 4-call positive result of Guo et al. (Eprint 2016). Furthermore, using 1 or 2 calls, even indifferentiable iterated blockciphers with polynomial \(\text {keyspace}\) are impossible.
> 
> To prove this, we develop an abstraction of idealized iterated blockciphers and establish various basic properties, and apply Extremal Graph Theory results to prove the existence of certain (generalized) non-random properties such as the boomerang and yoyo.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_14](https://doi.org/10.1007/978-3-031-30634-1_14)
## Optimal Security for Keyed Hash Functions: Avoiding Time-Space Tradeoffs for Finding Collisions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#optimal-security-for-keyed-hash-functions-avoiding-time-space-tradeoffs-for-finding-collisions)
### Authors
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, 91904, Jerusalem, Israel
### Abstract
> Cryptographic hash functions map data of arbitrary size to a fixed size digest, and are one of the most commonly used cryptographic objects. As it is infeasible to design an individual hash function for every input size, variable-input length hash functions are built by designing and bootstrapping a single fixed-input length function that looks sufficiently random. To prevent trivial preprocessing attacks, applications often require not just a single hash function but rather a family of keyed hash functions.
> 
> The most well-known methods for designing variable-input length hash function families from a fixed idealized function are the Merkle-Damgård and Sponge designs. The former underlies the SHA-1 and SHA-2 constructions and the latter underlies SHA-3. Unfortunately, recent works (Coretti et al. EUROCRYPT 2018, Coretti et al. CRYPTO 2018) show non-trivial time-space tradeoff attacks for finding collisions for both. Thus, this forces a parameter blowup (i.e., efficiency loss) for reaching a certain desired level of security. We ask whether it is possible to build families of keyed hash functions which are provably resistant to any non-trivial time-space tradeoff attacks for finding collisions, without incurring significant efficiency costs.
> 
> We present several new constructions of keyed hash functions that are provably resistant to any non-trivial time-space tradeoff attacks for finding collisions. Our constructions provide various tradeoffs between their efficiency and the range of parameters where they achieve optimal security for collision resistance. Our main technical contribution is proving optimal security bounds for converting a hash function with a fixed-sized input to a keyed hash function with (potentially larger) fixed-size input. We then use this keyed function as the underlying primitive inside the standard Merkle-Damgård and Merkle tree constructions. We strongly believe that this paradigm of using a keyed inner hash function in these constructions is the right one, for which non-uniform security has not been analyzed prior to this work.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_15](https://doi.org/10.1007/978-3-031-30634-1_15)
## Proof of Mirror Theory for a Wide Range of $\xi _{\max }$.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#proof-of-mirror-theory-for-a-wide-range-of-xi-max)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#proof-of-mirror-theory-for-a-wide-range-of-xi-max)
### Authors
* Benoît Cogliati, Thales DIS France SAS, Meudon, France
* Jacques Patarin, Thales DIS France SAS, Meudon, France
* Avijit Dutta, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
* Mridul Nandi, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Abishanka Saha, Indian Statistical Institute, Kolkata, India
* Jacques Patarin, Laboratoire de Mathématiques de Versailles, UVSQ, CNRS, Université Paris-Saclay, Versailles, France
### Abstract
> In CRYPTO’03, Patarin conjectured a lower bound on the number of distinct solutions \((P_1, \ldots , P_{q}) \in (\{0,1\}^{n})^{q}\) satisfying a system of equations of the form \(X_i \oplus X_j = \lambda _{i,j}\) such that \(P_1, P_2, \ldots \), \(P_{q}\) are pairwise distinct. This result is known as “\(P_i \oplus P_j\) Theorem for any \(\xi _{\max }\)” or alternatively as Mirror Theory for general \(\xi _{\max }\), which was later proved by Patarin in ICISC’05. Mirror theory for general \(\xi _{\max }\) stands as a powerful tool to provide a high-security guarantee for many blockcipher-(or even ideal permutation-) based designs. Unfortunately, the proof of the result contains gaps that are non-trivial to fix. In this work, we present the first complete proof of the \(P_i \oplus P_j\) theorem for a wide range of \(\xi _{\max }\), typically up to order \(O(2^{n/4}/\sqrt{n})\). Furthermore, our proof approach is made simpler by using a new type of equation, dubbed link-deletion equation, that roughly corresponds to half of the so-called orange equations from earlier works. As an illustration of our result, we also revisit the security proofs of two optimally secure blockcipher-based pseudorandom functions, and n-bit security proof for six round Feistel cipher, and provide updated security bounds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_16](https://doi.org/10.1007/978-3-031-30634-1_16)
## Non-adaptive Universal One-Way Hash Functions from Arbitrary One-Way Functions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#non-adaptive-universal-one-way-hash-functions-from-arbitrary-one-way-functions)
### Authors
* Xinyu Mao, Department of Computer Science, University of Southern California, Los Angeles, USA
* Jiapeng Zhang, Department of Computer Science, University of Southern California, Los Angeles, USA
* Noam Mazor, The Blavatnik School of Computer Science, Tel-Aviv University, Tel-Aviv, Israel
### Abstract
> In this work we give the first non-adaptive construction of universal one-way hash functions (UOWHFs) from arbitrary one-way functions. Our construction uses \(O(n^9)\) calls to the one-way function, has a key of length \(O(n^{10})\), and can be implemented in NC1 assuming the underlying one-way function is in NC1.
> 
> Prior to this work, the best UOWHF construction used \(O(n^{13})\) adaptive calls and a key of size \(O(n^5)\) (Haitner, Holenstein, Reingold, Vadhan and Wee [Eurocrypt ’10]). By the result of Applebaum, Ishai and Kushilevitz [FOCS ’04], the above implies the existence of UOWHFs in NC0, given the existence of one-way functions in NC1.
> 
> We also show that the PRG construction of Haitner, Reingold and Vadhan (HRV, [STOC ’10]), with small modifications, yields a relaxed notion of UOWHFs, which is a function family which can be (inefficiently) converted to UOWHF by changing the functions on a negligible fraction of the inputs. In order to analyze this construction, we introduce the notion of next-bit unreachable entropy, which replaces the next-bit pseudoentropy notion used by HRV.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_17](https://doi.org/10.1007/978-3-031-30634-1_17)
## XOCB: Beyond-Birthday-Bound Secure Authenticated Encryption Mode with Rate-One Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#xocb-beyond-birthday-bound-secure-authenticated-encryption-mode-with-rate-one-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#xocb-beyond-birthday-bound-secure-authenticated-encryption-mode-with-rate-one-computation)
### Authors
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Seongha Hwang, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Akiko Inoue, NEC, Kawasaki, Japan
* Kazuhiko Minematsu, NEC, Kawasaki, Japan
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### Abstract
> We present a new block cipher mode of operation for authenticated encryption (AE), dubbed \(\textsf{XOCB}\), that has the following features: (1) beyond-birthday-bound (BBB) security based on the standard pseudorandom assumption of the internal block cipher if the maximum block length is sufficiently smaller than the birthday bound, (2) rate-1 computation, and (3) supporting any block cipher with any key length. Namely, \(\textsf{XOCB}\) has effectively the same efficiency as the seminal \(\textsf{OCB}\) while having stronger quantitative security without any change in the security model or the required primitive in \(\textsf{OCB}\). Although numerous studies have been conducted in the past, our \(\textsf{XOCB}\) is the first mode of operation to achieve these multiple goals simultaneously.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_18](https://doi.org/10.1007/978-3-031-30634-1_18)
## Improved Power Analysis Attacks on Falcon.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#improved-power-analysis-attacks-on-falcon)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#improved-power-analysis-attacks-on-falcon)
### Authors
* Shiduo Zhang, Institute for Advanced Study, Tsinghua University, Beijing, China
* Xiuhan Lin, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Weijia Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, Zhongguancun Laboratory, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### Abstract
> Falcon is one of the three post-quantum signature schemes selected for standardization by NIST. Due to its low bandwidth and high efficiency, Falcon is seen as an attractive option for quantum-safe embedded systems. In this work, we study Falcon’s side-channel resistance by analysing its Gaussian samplers. Our results are mainly twofold.
> 
> The first result is an improved key recovery exploiting the leakage within the base sampler investigated by Guerreau et al. (CHES 2022). Instead of resorting to the fourth moment as in former parallelepiped-learning attacks, we work with the second order statistics covariance and use its spectral decomposition to recover the secret information. Our approach substantially reduces the requirement for measurements and computation resources: \(220\,000\) traces is sufficient to recover the secret key of Falcon-512 within half an hour with a probability of \(\approx 25\%\). As a comparison, even with \(10^6\) traces, the former attack still needs about 1000 h hours CPU time of lattice reduction for a full key recovery. In addition, our approach is robust to inaccurate leakage classification, which is another advantage over parallelepiped-learning attacks.
> 
> Our second result is a practical power analysis targeting the integer Gaussian sampler of Falcon. The analysis relies on the leakage of random sign flip within the integer Gaussian sampling. This leakage was exposed in 2018 by Kim and Hong, but it is not considered in Falcon’s implementation and unexploited for side-channel analysis until now. We identify the leakage within the reference implementation of Falcon on an ARM Cortex-M4 STM32F407IGT6 microprocessor. We also show that this single bit of leakage is in effect enough for practical key recovery: with \(170\,000\) traces one can fully recover the key of Falcon-512 within half an hour. Furthermore, combining the sign leakage and the aforementioned leakage, one can recover the key with only \(45\,000\) signature measurements in a short time.
> 
> As a by-product, we also extend our power analysis to Mitaka which is a recent variant of Falcon. The same leakages exist within the integer Gaussian samplers of Mitaka, and they can also be used to mount key recovery attacks. Nevertheless, the key recovery in Mitaka requires much more traces than it does in Falcon, due to their different lattice Gaussian samplers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_19](https://doi.org/10.1007/978-3-031-30634-1_19)
## Effective and Efficient Masking with Low Noise Using Small-Mersenne-Prime Ciphers.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#effective-and-efficient-masking-with-low-noise-using-small-mersenne-prime-ciphers)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#effective-and-efficient-masking-with-low-noise-using-small-mersenne-prime-ciphers)
### Authors
* Loïc Masure, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Thorben Moos, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Luxembourg City, Luxembourg
### Abstract
> Embedded devices used in security applications are natural targets for physical attacks. Thus, enhancing their side-channel resistance is an important research challenge. A standard solution for this purpose is the use of Boolean masking schemes, as they are well adapted to current block ciphers with efficient bitslice representations. Boolean masking guarantees that the security of an implementation grows exponentially in the number of shares under the assumption that leakages are sufficiently noisy (and independent). Unfortunately, it has been shown that this noise assumption is hardly met on low-end devices. In this paper, we therefore investigate techniques to mask cryptographic algorithms in such a way that their resistance can survive an almost complete lack of noise. Building on seed theoretical results of Dziembowski et al., we put forward that arithmetic encodings in prime fields can reach this goal. We first exhibit the gains that such encodings lead to thanks to a simulated information theoretic analysis of their leakage (with up to six shares). We then provide figures showing that on platforms where optimized arithmetic adders and multipliers are readily available (i.e., most MCUs and FPGAs), performing masked operations in small to medium Mersenne-prime fields as opposed to binary extension fields will not lead to notable implementation overheads. We compile these observations into a new AES-like block cipher, called AES-prime, which is well-suited to illustrate the remarkable advantages of masking in prime fields. We also confirm the practical relevance of our findings by evaluating concrete software (ARM Cortex-M3) and hardware (Xilinx Spartan-6) implementations. Our experimental results show that security gains over Boolean masking (and, more generally, binary encodings) can reach orders of magnitude despite the same amount of information being leaked per share.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_20](https://doi.org/10.1007/978-3-031-30634-1_20)
## One-Hot Conversion: Towards Faster Table-Based A2B Conversion.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-4].md#one-hot-conversion-towards-faster-table-based-a2b-conversion)
### Authors
* Jan-Pieter D’Anvers, imec-COSIC KU Leuven, Kasteelpark Arenberg 10 - bus 2452, 3001, Leuven, Belgium
### Abstract
> Arithmetic to Boolean masking (A2B) conversion is a crucial technique in the masking of lattice-based post-quantum cryptography. It is also a crucial part of building a masked comparison which is one of the hardest to mask building blocks for active secure lattice-based encryption. We first present a new method, called one-hot conversion, to efficiently convert from higher-order arithmetic masking to Boolean masking using a variant of the higher-order table-based conversion of Coron et al. Secondly, we specialize our method to perform arithmetic to 1-bit Boolean functions. Our one-hot function can be applied to masking lattice-based encryption building blocks such as masked comparison or to determine the most significant bit of an arithmetically masked variable. In our benchmarks on a Cortex M4 processor, a speedup of 15 times is achieved over state-of-the-art table-based A2B conversions, bringing table-based A2B conversions within the performance range of the Boolean circuit-based A2B conversions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-30634-1_21](https://doi.org/10.1007/978-3-031-30634-1_21)
